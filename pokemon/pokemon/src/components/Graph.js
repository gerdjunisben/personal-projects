import React from "react";
import Chart from 'chart.js/auto';


function Graph(props){
   const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [{x: 1, y: props.list[0]},
                   {x: 2, y: props.list[1]},
                   {x: 3, y: props.list[2]},
                   {x: 4, y: props.list[3]},
                   {x: 5, y: props.list[4]},
                   {x: 6, y: props.list[5]},
                   {x: 7, y: props.list[6]},
                   {x: 8, y: props.list[7]},
                   {x: 9, y: props.list[8]}]
        }]
    },
    options: {
      onClick: (e) => {
        const canvasPosition = getRelativePosition(e, chart);
  
        // Substitute the appropriate scale IDs
        const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
        const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
      }
    }
  });



    return( 
    <div>

    </div>);
}

export default Graph;