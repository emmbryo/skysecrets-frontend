const Kindex = () => {
  return ( 
    <div className="kindex-container">
      <p>planetary index</p>
      <table>
        <tbody>
          <tr id="kindex-green">
            <td>Green</td>
            <td>Calm or small geomagnetic disturbance</td>
            <td><b>Kp-Index 0-4</b></td>
            <td>No effect on devices or people</td>
          </tr>
          <tr id="kindex-yellow">
            <td>Yellow</td>
            <td>Weak/minor geomagnetic storm</td>
            <td><b>Kp-Index 5/G1</b></td>
            <td>Weak fluctuations in the electrical grid, minor effects on the operation of space satellites, as well as on the migration of animals are quite possible</td>
          </tr>
          <tr id="kindex-dark-yellow"> 
            <td>Dark yellow</td>
            <td>Moderate geomagnetic storm</td>
            <td><b>Kp-Index 6/G2</b></td>
            <td>Power systems located at high latitudes can experience emergency situations. Prolonged geomagnetic storms can damage transformers. HF radio signas may weaken.</td>
          </tr>
          <tr id="kindex-orange">
            <td>Orange</td>
            <td>Strong geomagnetic storm</td>
            <td><b>Kp-Index 7/G3</b></td>
            <td>False alarms may be triggered on some protective electronic devices. Correction of satellite orientation and navigation in outer space may be required.</td>
          </tr>
          <tr id="kindex-red">
            <td>Red</td>
            <td>Severe geomagnetic storm</td>
            <td><b>Kp-Index 8/G4</b></td>
            <td>There may be widespread problems with power grid voltages. Satellite nagivation may worsen for serveral hours, anf LF radio navigation may be disrupted.</td>
          </tr>
          <tr id="kindex-dark-red">
            <td>Dark red</td>
            <td>Extreme geomagnetic storm</td>
            <td><b>Kp-Index 9/G5</b></td>
            <td>Power systems may experience transformer damage and a complete collapse. HF radio comminications may not be possible. Satellite navigation may be disrupted.</td>
          </tr>
        </tbody>
      </table>
    </div> 
  );
}
 
export default Kindex;