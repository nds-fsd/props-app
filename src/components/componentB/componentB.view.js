import ComponentC from '../componentC';

const ComponentB = ({ value, setValueC }) => (
  <>
    <p>{value}</p>
    <ComponentC setValueC={setValueC} />
  </>
);

export default ComponentB;
