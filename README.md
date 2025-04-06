# To-Do List

### Front-End
- [ ] drop-down menu that allows you to change search query --> i.e. Genre --> Psychological or Anime --> Fruits Basket or MyAnimeList user.

- [ ] Search bar.. Maybe add an autocomplete search feature? i.e. "Fruits" would have dropdown to autofill "Fruits Basket".

- [ ] Work on the router... after the user finishes input, take them to the recommendation page. On the recommendation page, has header to go back to homepage.

- [ ] Design... Maybe have one of those image backgrounds? Or something more minimalist. I at least want to make it look decent. 

### Struggles

Testing the similarities between genres did not necessarily equate to similarity in anime; I had originally put a threshold of .5 to 
filter out what I assumed to be irrelevant anime, but inaccurate recommendations often ended up being attributed to ineffective genre similarity results.

E.g. (1)
The similarities between 'Hyouka' and SNAFU ('Yahari Ore no Seishun Love Comedy wa Machigatteiru') ended up being 0.15 despite being the most recommended animes for each other.

```
#cosine similarity of the genres from the two shows.
In: cosine_sim_df.loc['Hyouka', 'Yahari Ore no Seishun Love Comedy wa Machigatteiru.'] 
Out: np.float64(0.15302320259594404)
```

![Image](https://github.com/user-attachments/assets/c916c8ec-e2a0-4abd-866b-79e15c8bcaeb)

(*from their corresponding pages on MyAnimeList*)

E.g. (2)
The similarities between 'Yuru Camp' and 'A Place Further Than The Universe' ('Sora yori mo Tooi Basho') was 0.40 despite also being great recommendations for each other.
```
In: cosine_sim_df.loc['Yuru Camp△', 'Sora yori mo Tooi Basho']
Out: np.float64(0.4009309595634396)
```
![Image](https://github.com/user-attachments/assets/380c29ab-1968-44b9-b817-e7099885bea3)

E.g. (3)
The similarities between 'K-On!' and 'Tamako Market' was **0.0** despite also being great recommendations for one another.

```
In: cosine_sim_df.loc['K-On!', 'Tamako Market']
Out: np.float64(0.0)
```
![Image](https://github.com/user-attachments/assets/f0634ab7-6388-4546-935f-e54c95fab2b9)

