import Layout from "../components/layout";
import Counter from "../components/counter";
import { Picker } from 'emoji-mart';


export default () => (
  <Layout>
    
    <p className="countPage text-center p-2">This is the count page</p>
    <Picker />
    
    <Counter />
    
    <style jsx>{`
      .countPage {
        color: white;
        background-color: green;
      }
    `}</style>
  </Layout>
);
