function Todolist(){
    return(
        <div>
            <form className="list">
                <div className="list-input">
                    <span className="radio"></span>
                    <input type="text" className="bar" placeholder="Create a new Todo" />
                </div>  
            </form>
        </div>
    );
};
export default Todolist