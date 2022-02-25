import { world_map } from './world-map';
//import { uncountries } from './data';
import * as React from "react";
//import Content from './Content';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend, MapsTooltip, Zoom, Selection, MarkersDirective, MarkerDirective, Marker, Highlight  } from '@syncfusion/ej2-react-maps';

import './App.css'

const SAMPLE_CSS = `
.pulse-css {
    width: 10px;
    height: 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background:#3386dc;
    position: relative;
  }
  .pulse-css:before, .pulse-css:after {
    content: '';
    width: 10px;
    height: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #3386dc;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: center center;
    animation: pulse-me 3s linear infinite;
  }
  .pulse-css:after {
    animation-delay: 2s;
  }
  @keyframes pulse-me {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    70% {
      opacity: 0.1;
    }
    100% {
      transform: scale(5);
      opacity: 0;
    }
  }
    `; 
  let marketTemp: string = '<div id="template"> <div class="pulse-container"><div class="pulse-box"><div class="pulse-css"></div></div></div></div>'
  
class App extends React.Component {

    
    render() {
        
        return (
          <div className='main-container'>
            <style>
              {SAMPLE_CSS}
            </style>
            <div className='top-bar'>
              <h1 className='heading'>World Map</h1>
              <div className='dropdown-setting-container'>
                <div>
                  <input list="inputs-drop-down" type="search" className="search" placeholder="Region"/>
                  <datalist className="drop-list"  id="inputs-drop-down">
                    <option value="America" >America</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Russia">Russia</option>
                  </datalist>
                </div>
                <img style={{height: "22px", width: "22px", marginLeft: "30px", borderRadius:"10px"}} alt=''src='https://res.cloudinary.com/di01osmzz/image/upload/v1645686634/gear_wheel_mrf2bx.png' />
              </div>

            </div>
           
            <MapsComponent id="maps" className='maps' legendSettings={{ visible: true }} theme="Material" zoomSettings={{
              enable: true,
              color: 'green',
              highlightColor: 'blue',
              selectionColor: 'orange',
              horizontalAlignment: 'Far',
              mouseWheelZoom: false,
              toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']}} 
            > 
            
              <Inject services={[Legend, MapsTooltip, Zoom, Selection, Marker]}/>
              <LayersDirective>
              
                  <LayerDirective 
                    shapeData={world_map} 
                    shapeDataPath='Country' 
                    shapePropertyPath='name' 
                    /*
                    tooltipSettings={{
                      visible: true,
                      valuePath: 'name'
                    }}
                    */
                    animationDuration={500}
                    selectionSettings={{
                      enable: true,
                      fill: 'gray',
                      border: { color: 'black', width: 1 }
                  }}>
                    <MarkersDirective> 
                      <MarkerDirective 
                        visible={true} 
                        height={10} width={10} 
                        template = {marketTemp}
                        tooltipSettings={{
                          visible: true,
                          valuePath: 'city',
                          format: 'Unit-1, Stanley Green <br> Toledo, Aland Islands',
                        }} 
                        dataSource={[
                          { latitude: 20.95121990866204, longitude: 73.468749999999998 },
                          { latitude: 50.88893689676585, longitude: -80.3359375 },
                          { latitude: -14.64607562172573, longitude: 35.54687499999999 }
                        ]}
                        >
                      </MarkerDirective>

                      <MarkerDirective 
                        visible={true} 
                        
                        template = '<div> Healthy <br> Need attention <br> Critical </div>'
                        dataSource={[{ latitude: 50.95121990866204, longitude: 250.468749999999998 },]}
                        >
                      </MarkerDirective>
 
                    </MarkersDirective> 
                  </LayerDirective>
              </LayersDirective>
            </MapsComponent>
          </div>
          );
    }
}
export default App; 