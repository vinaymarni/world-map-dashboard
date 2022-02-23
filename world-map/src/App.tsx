import { world_map } from './world-map';
import { uncountries } from './data';
import * as React from "react";
import { MapsComponent, LayersDirective, LayerDirective, Inject, Legend, MapsTooltip, Zoom, Selection, MarkersDirective, MarkerDirective, Marker  } from '@syncfusion/ej2-react-maps';
class App extends React.Component {
    render() {
        return (
          <MapsComponent id="maps" legendSettings={{ visible: true }} theme="Material" zoomSettings={{
            enable: true,
            color: 'green',
            highlightColor: 'blue',
            selectionColor: 'orange',
            horizontalAlignment: 'Far',
            mouseWheelZoom: true,
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
                  selectionSettings={{
                    enable: true,
                    fill: 'gray',
                    border: { color: 'black', width: 1 }
                }}
                >
                  <MarkersDirective> 
                    <MarkerDirective 
                      visible={true} 
                      height={10} width={10} 
                      fill="#3386dc" shape="Circle" 
                      tooltipSettings={{
                        visible: true,
                        valuePath: 'city'
                      }} 
                      dataSource={[{ latitude: 49.95121990866204, longitude: 18.468749999999998, city: 'Poland'  }]}
                    >
                    </MarkerDirective>
                    <MarkerDirective 
                      visible={true} 
                      height={10} width={10} 
                      fill="#3386dc" shape="Circle" 
                      tooltipSettings={{
                        visible: true,
                        valuePath: 'city'
                      }}
                      dataSource={[{ latitude: 59.88893689676585, longitude: -109.3359375, city: 'Canada' }]}
                      >
                    </MarkerDirective>
                    <MarkerDirective 
                    visible={true} 
                    height={10} width={10} 
                    fill="#3386dc" shape="Circle" 
                    tooltipSettings={{
                      visible: true,
                      valuePath: 'city'
                    }}
                    dataSource={[{ latitude: -6.64607562172573, longitude: -55.54687499999999, city: 'Brazil' }]}>
                    </MarkerDirective>
                  </MarkersDirective>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
          );
    }
}
export default App;