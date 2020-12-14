import React, { Component } from 'react';
import CollapsibleNavbar from './CollapsibleNavbar';
import ResponsiveSection from './ResponsiveSection';
import Intro from './Intro';
import WebDevelopment from './WebDevelopment';
import Engineering from './Engineering';
import GraphicDesign from './GraphicDesign';
import ContactMe from './ContactMe';
import Footer from './Footer';
import '../styles.css';



// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }
// export const images = importAll(
//   require.context('../images', false, /\.(png|jpe?g|svg)$/)
// );

class App extends Component {
  render() {
    return (
      <div className="w-full overflow-hidden">
<CollapsibleNavbar/>

<ResponsiveSection
    topslant= {false}
    bottomslant={true}
    bg={'gray-200'}
    container={false}
    containerbg={'green-300'}
    textcolor={'black'}>
<Intro/>
</ResponsiveSection>

<ResponsiveSection
    topslant= {true}
    bottomslant={true}
    bg={'green-800'}
    container={false}
    containerbg={'white'}
    textcolor={'white'}>
<WebDevelopment/>
</ResponsiveSection>

<ResponsiveSection
    topslant= {true}
    bottomslant={true}
    bg={'white'}
    container={false}
    containerbg={'white'}
    textcolor={'black'}>
<GraphicDesign/>
</ResponsiveSection>

<ResponsiveSection
    topslant= {true}
    bottomslant={true}
    bg={'green-800'}
    container={false}
    containerbg={'white'}
    textcolor={'white'}>
<Engineering
    cardcolor={''}
    cardtext={''}/>
</ResponsiveSection>
<ResponsiveSection
    topslant= {true}
    bottomslant={false}
    bg={'gray-200'}
    container={false}
    containerbg={'white'}
    textcolor={'black'}>
<ContactMe/>
</ResponsiveSection>
<ResponsiveSection
    topslant= {false}
    bottomslant={false}
    bg={'green-900'}
    container={false}
    containerbg={'white'}
    textcolor={'white'}
    topborder={false}
    bordercolor={'green-900'}>
    
<Footer/>
</ResponsiveSection>

</div>
    );
  }
}

export default App;

