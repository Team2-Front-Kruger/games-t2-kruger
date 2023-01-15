import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetch3Games } from "../../store/gameslog/gameslogSlice";

const CardGames = () => {

    
    const dispatch = useDispatch();
    const {list: games} = useSelector(state => state.gameslog);

    useEffect(() => {
        dispatch(fetch3Games());
    }, [dispatch])

    return (
        <>
        <div >
            {
                games.map((games, id) => (
                    <div key={games.id} className="card glass flex-col lg:flex-row max-w-sm mb-2">
                        <div className="card-body flex-row " >
                            <img className="card w-1/3" src= {games.background_image} alt="ea" />
                            <div>
                            <h5>{games.name}</h5>
                            <h5>
                            ⭐ {games.rating}
                            </h5>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div>
            <Link className="flex w-fit ml-5" to='/'><svg class="h-7 w-7 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="11 19 2 12 11 5 11 19" />  <polygon points="22 19 13 12 22 5 22 19" /></svg> - Descubre más</Link>
            </div>
        </div>     
        </>
     );
}
 
export default CardGames;