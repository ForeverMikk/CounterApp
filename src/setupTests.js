import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
//En este caso no vamos a usar el motor de purbas por default
// import "@testing-library/jest-dom/extend-expect";

//vamos a usar el motor de Pruebas de Enzyne (creado por los desarrolladores de Airb&b)

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
