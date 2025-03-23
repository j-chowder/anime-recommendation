
export default function Arrow({open}){
   
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 24 24" width={15} height={15} strokeWidth={4} 
        stroke="currentColor" 
        style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition:  'transform 0.3s ease'
        }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    )
}