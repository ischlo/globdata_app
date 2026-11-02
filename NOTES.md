To do: 

- sector detail explanation: the input data columns need to be transformed, from 'osm_{sector}_var' into 'Sector {sector}', so that in the selection pane the option becomes for example: osm_C_var -> Sector C. In addition, the json file isic_dict.json in src/ contains detailed information about each sector. In the selection menu, I want to add some of the text from the 'description' field to better understand the sector. Take the text, and add only the first line of text to the sector. When a sector is selected, a new box should appear under the selection box, of the same width, containing as heading the section code and a paragraph with the full description field content.

- about section : the about section should open a semi transparent window on top on the map, so that one can still see the map outline in the back. into it i will add the text myself.

- border linewidth of cells should be 0 unless selected, in which case it should be thick red
- reach out email for feedback: in the bottom right corner, add an email logo and my name: Ivann Schlosser, 2026. the logo should emailto: ivann.schlosser@ouce.ox.ac.uk
- movement of view: when the 'find me' button is pressed, the map should navigate to the location and put it in the middle of the map at high enough zoom level to see properly.

- axes adjustement: i want the axis of the barplot to dynamically update when new data is selected, so that the axis shrinks or expands based on the new data, if that is possible. Consider alternative libraryes such as D3 to implement this.

---------------------------- 

- The linkg should be the follwoing:
  -  github: 

- add a histogram to the right plot panel showing the distribution of data for the selected variable (all, or one of the sectors). When a cell is clicked, a red vertical line should appear on the histogram at the selected value. 

- push git pages


- bbox viewer: for each data set,  i want you to take the boundary box and plot it as a transparent rectangle polygon on the map when it is rendered with in the upper corner the name of the file from which the data was read. make the border color of the polygon orange


- scalebar, just a single line it should be in bottom right of the screen, but should be covered by the side bar.
- sidebar transparency, make it 20% more transparent
- change for a stellite basemap with labels
- Change slighlty the layout of the of plotting sidebar:
  - Change sidebar text: add a bigger heading on top saying : 'Selected Location'
  - Under it, replace the 'Selected Cell' label with 'H3 ID: ' and add the cell id on the same line in white font color of the same size as currently.
  - Under the cell id, add the heading 'Modelled Output (USD$)' in the same size as the 'distribution' heading.
  - When the sidebar is open and a cell is selected, add a button under the distribution called 'Show Location', that dynamically moves the map back to the selected cell.
  - Add axes labels, on the barplot: vertically written 'sector' on the y axis, and 'output (USD$)' on the x-axis
  - On the histogram: add vertically 'count' on the y label, and 'output  (USD$)' on the x axis.