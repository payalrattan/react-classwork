import "./BasicComponent";
export const BasicComponent=()=>{
    const returnString = "some content"
    

    return(
        <div className="some-class">
            <h2>
                This is my first component.
            </h2>
            <p>
                {returnString}
            </p>
        </div>
    )
}