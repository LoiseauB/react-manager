

function NewPlayersFrom() {

    return (
        <>
            <div>
                <h2>Ajouter un nouveau joueur</h2>
                <form>
                    <label>Nom du joueur: </label><br/>
                    <input type="text" value=""></input><br/>
                    <label>Age du joueur: </label><br/>
                    <input type="number" value=""></input><br/>
                    <label>Poste du joueur: </label><br/>
                    <input type="text" value=""></input><br/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </>
    );
}



export default NewPlayersFrom;