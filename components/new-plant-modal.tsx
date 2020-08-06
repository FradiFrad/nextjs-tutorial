
export default function NewPlantModal() {

    return (
        <section>
         
            <form>
            <h2>Add a new plant to your garden !</h2>
            <label>Name</label>
            <input type="text"></input>

            <h3>Water</h3>
            <input type="radio" id="water-choice-1" name="water" value="0"/>
                <label htmlFor="water-choice-1">Less than once a week</label>
                <input type="radio" id="water-choice-2" name="water" value="1"/>

                <label htmlFor="water-choice-2">Once a week</label>
                <input type="radio" id="water-choice-3" name="water" value="2"/>
                <label htmlFor="water-choice-3">As soon as it's not wet anymore</label>
            </form>
            

            {/* <button  onClick = ()=> addANew >Save</button> */}
        </section>
    )
  }
// Q : can I use setState outside a component ?
  export function showNewPlantModal() {
    this.setVisibility(true)
  }
