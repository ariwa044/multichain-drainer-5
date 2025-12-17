import buttonData from "../assets/json/buttons.json";
import Button from "./Button";

const MakeSelection = () => {
    return (
        <section>
        <div className="container">
          <h2 className="cs-section_heading cs-style1 text-center">
            Make Your Selection Below
          </h2>
          <div className="cs-height_45 cs-height_lg_45"></div>
          <div className="row">
            {
                buttonData.map((button, index) => (
                    <Button
                        {...button}
                        key={index}
                    />
                ))
            }
          </div>
        </div>
      </section>
    )
}

export default MakeSelection;