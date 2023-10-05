import "./TechnicalEquipmentFifth.css";
import techEq5Data from "./techEq5.data";

const TechnicalEquipmentFifth = () => {
  return (
    <div className="technicalEquipmentFifth">
      <h3>ГЕОДЕЗИЧЕСКОЕ ОБОРУДОВАНИЕ</h3>

      {techEq5Data.map((item, i) => (
        <div className="technicalEquipmentFifthMain" key={i}>
          <div className="technicalEquipmentFifthMainLeft">
            <h3>{item.title}</h3>
            {item.text}
          </div>

          <img src={item.img} alt="tca-img" width={"220px"} />
        </div>
      ))}
    </div>
  );
};

export default TechnicalEquipmentFifth;
