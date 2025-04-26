# To-Do List

### Front-End
- [ ] drop-down menu that allows you to change search query --> i.e. Genre --> Psychological or Anime --> Fruits Basket or MyAnimeList user.

- [ ] Search bar.. Maybe add an autocomplete search feature? i.e. "Fruits" would have dropdown to autofill "Fruits Basket".

- [ ] Work on the router... after the user finishes input, take them to the recommendation page. On the recommendation page, has header to go back to homepage.

- [ ] Design... Maybe have one of those image backgrounds? Or something more minimalist. I at least want to make it look decent. 

### Struggles

Testing the similarities between genres did not necessarily equate to similarity in anime; I had originally put a threshold of .5 to 
filter out what I assumed to be irrelevant anime, but inaccurate recommendations often ended up being attributed to ineffective genre similarity results.

E.g.
The similarities between 'Hyouka' and SNAFU ('Yahari Ore no Seishun Love Comedy wa Machigatteiru') ended up being 0.15 despite being the most recommended animes for each other.

```
#cosine similarity of the genres from the two shows.
In: cosine_sim_df.loc['Hyouka', 'Yahari Ore no Seishun Love Comedy wa Machigatteiru.'] 
Out: np.float64(0.15302320259594404)
```
| Title | Hyouka | Snafu |
| --- | --- | --- |
| Genres | Mystery, Slice of Life, <ins>School</ins> | Comedy, Romance, Love Polygon, <ins>School</ins> |

<br>

E.g.
The similarities between 'K-On!' and 'Tamako Market' was **0.0** despite also being great recommendations for one another.

```
In: cosine_sim_df.loc['K-On!', 'Tamako Market']
Out: np.float64(0.0)
```
| Title | K-On! | Tamako Market |
| --- | --- | --- |
| Genres | Comedy, Cute Girls Doing Cute Things (CGDCT), Music, School | Slice of Life, Iyashikei |

(*from their corresponding pages on MyAnimeList*)

<br>

  This indicated that while basing item similarities solely off of genre similarities could at times be effective (especially with matching similar animes with mutual niche genres), there are definetely occurences in which it misrepresented similarities between anime, making it a unreliable metric if used independently. This is because of two major reasons:

1. Broader, more general genres -- i.e. comedy, school, drama --  are used, but often only represent the anime at a surface level.

2. The amount of genres per show is small, making each mutual genre -- and the lack of mutual genres -- have a much more significant impact on similarity than optimal.

```
WITH get_num_genres as (
SELECT genres, COUNT(genre) AS num_genres
FROM animes,
unnest(string_to_array(animes.genres, ' ', '')) as genre
GROUP BY anime_id
)

SELECT ROUND(AVG(num_genres), 2) as mean, percentile_cont(0.5) WITHIN GROUP (ORDER BY num_genres) as median FROM get_num_genres
```
Out:
| mean | median |
| ----- | -------|
| 3.23 | 3 |

---
#### Relations

MyAnimeList separates anime into individual seasons -- a prequel and a sequel will not count as one anime, but two. 
<br>

For the purpose of this project, there is little point in recommending a sequel of an anime over, say, the **franchise** as a whole. Instead of recommending "Kizumonogatari," it would be much better to recommend either (1) the first season of the franchise, "Bakemonogatari," or (2) the name of the franchise as a whole, "Monogatari Series." This is especially important for franchises with multiple seasons and/or relations, like the Fate Series. This is because:

- the Sequel Effect (as a series continues, the rating for later seasons tend to go up) will skew data and make it less reliable. Users who liked the first season will naturally watch the second season, and have a much higher likelihood to like the second season as well.
- Animes in the same franchise will inherently be similar so recommending a sequel is often redundant and ineffective.
    - _There are exceptions, like "Vinland Saga" Seasons 1 and 2, or "Attack on Titan" Seasons 1-3 and 4, where there are drastic differences between seasons, but they are few and far between._

 ##### Cleaning Data

 Originally, I had removed every anime except for the ones that either don't have relations (meaning they are the sole anime in the franchise), or are prequels. This would ensure that side stories, character stories, and sequels would be removed -- making each entry unique and pertaining to a unique anime franchise.

<br>

An issue with this appraoch was that prequels were not based off of **release date** but rather based on its position **chronologically, in context of the story**. I.e. "Jujutsu Kaisen 0" is the prequel of "Jujutsu Kaisen" despite the former releasing after the latter.

There were also edge cases like "Fullmetal Alchemist" and "Fullmetal Alchemist: Brotherhood" not being related, or "Hunter x Hunter" and "Hunter x Hunter (2011)" being "alternative versions". 

