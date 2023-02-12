import './App.css';
import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="w-50 m-auto">
            <PersonCard firstName={'Amy'} lastName={'Pond'} age={23} hairColor={'red'} />
            <PersonCard firstName={'Rose'} lastName={'Tyler'} age={19} hairColor={'blonde'} />
            <PersonCard firstName={'River'} lastName={'Song'} age={36} hairColor={'brown'} />
            <PersonCard firstName={'Claire'} lastName={'Oswald'} age={25} hairColor={'brown'} />
        </div>
    );
}

export default App;
