import React from 'react';
import multistrandwire from '../Images/wires2.png'
import wiregallery from '../Images/wiregallery.jpg'
import wirebundlegallery from '../Images/wirebundlegallery.png'
import submersibleimage from '../Images/submersibleimage.jpeg'
import roundalum from '../Images/aluminuround.png'
import alum1 from '../Images/alumcable.webp'
import singlecorealum from '../Images/singlecorealum2.jpg'
import roundalum2 from '../Images/cableconstruction-cableselection-energyoptimization.webp'
import flatwire from '../Images/gallerywire.png'
import coppercoxialimage from '../Images/coppercoaxial.jpg'

// Price data for multistrand wires
const multistrandWireData90Mtr = [
    { id: 1, conductor: '0.75', dimension: '24/0.2', rate: 1265, coils: 24 },
    { id: 2, conductor: '1.00', dimension: '14/0.3', rate: 1660, coils: 20 },
    { id: 3, conductor: '1.50', dimension: '22/0.3', rate: 2499, coils: 16 },
    { id: 4, conductor: '2.50', dimension: '36/0.3', rate: 4030, coils: 12 },
    { id: 5, conductor: '4.00', dimension: '56/0.3', rate: 6160, coils: 8 },
    { id: 6, conductor: '6.00', dimension: '84/0.3', rate: 9150, coils: 8 },
    { id: 7, conductor: '10.00', dimension: '140/0.3', rate: 15200, coils: 6 },
  ];
  
  const multistrandWireData45Mtr = [
    { id: 1, conductor: '0.75', dimension: '24/0.2', rate: 635, coils: 32 },
    { id: 2, conductor: '1.00', dimension: '14/0.3', rate: 835, coils: 32 },
    { id: 3, conductor: '1.50', dimension: '22/0.3', rate: 1255, coils: 32 },
    { id: 4, conductor: '2.50', dimension: '36/0.3', rate: 2020, coils: 24 },
    { id: 5, conductor: '4.00', dimension: '56/0.3', rate: 3090, coils: 24 },
  ];

  const multicoreWireData = [
    { id: 8, conductor: '23/60', twoCoreRate: 2330, twoCoreCoils: 8, threeCoreRate: 3400, threeCoreCoils: 8, fourCoreRate: '...', fourCoreCoils: 6 },
    { id: 9, conductor: '40/60', twoCoreRate: 3700, twoCoreCoils: 6, threeCoreRate: 5455, threeCoreCoils: 6, fourCoreRate: '...', fourCoreCoils: 6 },
    { id: 10, conductor: '0.50', twoCoreRate: 2450, twoCoreCoils: 6, threeCoreRate: 3550, threeCoreCoils: 6, fourCoreRate: 4525, fourCoreCoils: 6 },
    { id: 11, conductor: '0.75', twoCoreRate: 3490, twoCoreCoils: 6, threeCoreRate: 4910, threeCoreCoils: 6, fourCoreRate: 6260, fourCoreCoils: 6 },
    { id: 12, conductor: '1.00', twoCoreRate: 3935, twoCoreCoils: 5, threeCoreRate: 5790, threeCoreCoils: 4, fourCoreRate: 7460, fourCoreCoils: 4 },
    { id: 13, conductor: '1.50', twoCoreRate: 5850, twoCoreCoils: 5, threeCoreRate: 8660, threeCoreCoils: 4, fourCoreRate: 10980, fourCoreCoils: 4 },
    { id: 14, conductor: '2.50', twoCoreRate: 9190, twoCoreCoils: 4, threeCoreRate: 13580, threeCoreCoils: 4, fourCoreRate: 18150, fourCoreCoils: 4 },
    { id: 15, conductor: '4.00', twoCoreRate: 14400, twoCoreCoils: 4, threeCoreRate: 21050, threeCoreCoils: 4, fourCoreRate: 27550, fourCoreCoils: 4 },
    { id: 16, conductor: '6.00', twoCoreRate: 21060, twoCoreCoils: 4, threeCoreRate: 31270, threeCoreCoils: 4, fourCoreRate: 40865, fourCoreCoils: 4 },
  ];
  
// Data for Submersible Cables
const submersibleCablesData = [
    { id: 17, conductor: '1.50', dimension: '22/0.3', currentCapacity: 16, rate: 9435.00, coils: 4 },
    { id: 18, conductor: '2.50', dimension: '36/0.3', currentCapacity: 22, rate: 14740.00, coils: 4 },
    { id: 19, conductor: '4.00', dimension: '56/0.3', currentCapacity: 29, rate: 22360.00, coils: 4 },
    { id: 20, conductor: '6.00', dimension: '84/0.3', currentCapacity: 38, rate: 32070.00, coils: 2 },
    { id: 21, conductor: '10.00', dimension: '140/0.3', currentCapacity: 51, rate: 52410.00, coils: 2 },
  ];
  
  // Data for Aluminium Round Cables
  const aluminiumCablesData = [
    { id: 22, conductor: '6.00', dimension: '1/2.76', twoCoreRate: 3780.00, twoCoreCoils: 4, threeCoreRate: 5575.00, threeCoreCoils: 3, fourCoreRate: 6815.00, fourCoreCoils: 2 },
    { id: 23, conductor: '10.00', dimension: '1/3.57', twoCoreRate: 6075.00, twoCoreCoils: 4, threeCoreRate: 8270.00, threeCoreCoils: 3, fourCoreRate: 11120.00, fourCoreCoils: 2 },
  ];
    
  // Data for Aluminium Cable with Solid Conductor
const aluminiumSolidConductorData = [
    { id: 24, conductor: '1.50', dimension: '1/1.40', singleRate: 450.00, singleCoils: 24, twinRate: 1050.00, twinCoils: 10 },
    { id: 25, conductor: '2.50', dimension: '1/1.78', singleRate: 725.00, singleCoils: 18, twinRate: 1530.00, twinCoils: 8 },
    { id: 26, conductor: '4.00', dimension: '1/2.26', singleRate: 1030.00, singleCoils: 12, twinRate: 1915.00, twinCoils: 6 },
    { id: 27, conductor: '6.00', dimension: '1/2.76', singleRate: 1405.00, singleCoils: 12, twinRate: 2880.00, twinCoils: 6 },
    { id: 28, conductor: '8.00', dimension: '1/3.18', singleRate: null, singleCoils: '--', twinRate: 3720.00, twinCoils: 6 },
    { id: 29, conductor: '10.00', dimension: '1/3.57', singleRate: 2170.00, singleCoils: 8, twinRate: 4425.00, twinCoils: 4 },
    { id: 30, conductor: '16.00', dimension: '1/4.51', singleRate: 3375.00, singleCoils: 4, twinRate: 6475.00, twinCoils: 4 },
  ];
  
  // Data for Aluminium Single Core Unsheathed Cable
  const aluminiumSingleCoreData = [
    { id: 31, conductor: '1.50', dimension: '3/0.82', rate: 535.00, coils: 22 },
    { id: 32, conductor: '2.50', dimension: '3/1.08', rate: 815.00, coils: 18 },
    { id: 33, conductor: '4.00', dimension: '7/0.82', rate: 1145.00, coils: 12 },
    { id: 34, conductor: '6.00', dimension: '7/1.08', rate: 1615.00, coils: 12 },
    { id: 35, conductor: '10.00', dimension: '7/1.42', rate: 2499.00, coils: 8 },
    { id: 36, conductor: '16.00', dimension: '7/1.70', rate: 3895.00, coils: 4 },
    { id: 37, conductor: '25.00', dimension: '7/2.13', rate: 5430.00, coils: 2 },
  ];
  
// Data for Aluminium Round Cable Multiple Conductor
const aluminiumRoundCableData = [
    { id: 38, conductor: '2.50', dimension: '7/0.67', rate2Core: 2075.00, pkg2Core: 4, rate3Core: 2735.00, pkg3Core: 4, rate4Core: 3575.00, pkg4Core: 4 },
    { id: 39, conductor: '4.00', dimension: '7/0.82', rate2Core: 2660.00, pkg2Core: 4, rate3Core: 3975.00, pkg3Core: 4, rate4Core: 4655.00, pkg4Core: 4 },
    { id: 40, conductor: '6.00', dimension: '7/1.45', rate2Core: 4800.00, pkg2Core: 4, rate3Core: 6450.00, pkg3Core: 4, rate4Core: 7925.00, pkg4Core: 4 },
    { id: 41, conductor: '10.00', dimension: '7/1.35', rate2Core: 6345.00, pkg2Core: 2, rate3Core: 9045.00, pkg3Core: 2, rate4Core: 11655.00, pkg4Core: 2 },
    { id: 42, conductor: '16.00', dimension: '7/1.70', rate2Core: 10310.00, pkg2Core: 2, rate3Core: 13778.00, pkg3Core: 2, rate4Core: 17630.00, pkg4Core: 2 },
  ];
  
  // Data for Coaxial Cable with Copper Conductor
  const coaxialCableData = [
    { id: 43, size: 'RG-59', rateCCA: 1745.00, pkgCCA: 6, rateCopper: 2820.00, pkgCopper: 6 },
    { id: 44, size: 'RG-06', rateCCA: 2030.00, pkgCCA: 6, rateCopper: 3640.00, pkgCopper: 6 },
    { id: 45, size: 'RG-11', rateCCA: 2415.00, pkgCCA: 6, rateCopper: 4025.00, pkgCopper: 6 },
  ];
  
  // Data for Parallel Flat Cable
  const parallelFlatCableData = [
    { id: 46, conductor: '23/52', dimension: '23/60', rate45Mtrs: 960.00, pkg45Mtrs: 30, rate90Mtrs: 1900.00, pkg90Mtrs: 20 },
    { id: 47, conductor: '40/52', dimension: '40/60', rate45Mtrs: 1520.00, pkg45Mtrs: 30, rate90Mtrs: 3030.00, pkg90Mtrs: 20 },
    { id: 48, conductor: '16/0.2', dimension: '0.50', rate45Mtrs: 990.00, pkg45Mtrs: 30, rate90Mtrs: 1975.00, pkg90Mtrs: 20 },
    { id: 49, conductor: '24/0.2', dimension: '0.75', rate45Mtrs: 1420.00, pkg45Mtrs: 25, rate90Mtrs: 2840.00, pkg90Mtrs: 16 },
    { id: 50, conductor: '32/0.2', dimension: '1.00', rate45Mtrs: 1900.00, pkg45Mtrs: 20, rate90Mtrs: 3710.00, pkg90Mtrs: 12 },
    { id: 51, conductor: '22/0.2', dimension: '1.50', rate45Mtrs: 2500.00, pkg45Mtrs: 15, rate90Mtrs: 4985.00, pkg90Mtrs: 10 },
  ];
  






//   function here 

const PriceTable = ({ title, data }) => {
  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center ">{title}</h2>
      <table className="table-auto  border-collapse border border-gray-400">
        <thead>
          <tr >
            <th className="border border-gray-300 p-2">S.No.</th>
            <th className="border border-gray-300 p-2">Normal Area of Conductor (Sq. mm)</th>
            <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
            <th className="border border-gray-300 p-2">Rate (in Rs.)</th>
            <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2 text-center">{item.id}</td>
              <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
              <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
              <td className="border border-gray-300 p-2 text-center">₹ {item.rate}</td>
              <td className="border border-gray-300 p-2 text-center">{item.coils}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const MulticoreWireTable = () => {
    return (
      <div className="p-4 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Multicore Round Flexible Wire</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.No.</th>
              <th className="border border-gray-300 p-2">Normal Area of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">2 Core (90 Mtrs) Rate (in Rs.)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">3 Core (90 Mtrs) Rate (in Rs.)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">4 Core (90 Mtrs) Rate (in Rs.)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {multicoreWireData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.twoCoreRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.twoCoreCoils}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.threeCoreRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.threeCoreCoils}</td>
                <td className="border border-gray-300 p-2 text-center">{item.fourCoreRate === '...' ? 'N/A' : `₹ ${item.fourCoreRate}`}</td>
                <td className="border border-gray-300 p-2 text-center">{item.fourCoreCoils}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const SubmersibleCableTable = () => {
    return (
      <div className="p-4 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center">Submersible Cables</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.NO.</th>
              <th className="border border-gray-300 p-2">Normal Area Of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">Current Carrying Capacity Rating (Amp.)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) per 100 Mtrs</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {submersibleCablesData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">{item.currentCapacity}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.coils}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const AluminiumCableTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Aluminium Round Cable</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.NO.</th>
              <th className="border border-gray-300 p-2">Normal Area Of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">2 Core (100 Mtrs) Rate (Rs)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">3 Core (100 Mtrs) Rate (Rs)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">4 Core (100 Mtrs) Rate (Rs)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {aluminiumCablesData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.twoCoreRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.twoCoreCoils}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.threeCoreRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.threeCoreCoils}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.fourCoreRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.fourCoreCoils}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const AluminiumSolidConductorTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Aluminium Cable with Solid Conductor</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.NO.</th>
              <th className="border border-gray-300 p-2">Normal Area Of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 90 Mtrs Single (Unsheathed)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 90 Mtrs Twin Flat (Sheathed)</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {aluminiumSolidConductorData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.singleRate ? item.singleRate : '--'}</td>
                <td className="border border-gray-300 p-2 text-center">{item.singleCoils}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.twinRate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.twinCoils}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const AluminiumSingleCoreTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Aluminium Single Core Unsheathed Cable</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.NO.</th>
              <th className="border border-gray-300 p-2">Normal Area Of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 90 Mtrs</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {aluminiumSingleCoreData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate}</td>
                <td className="border border-gray-300 p-2 text-center">{item.coils}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const AluminiumRoundCableTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Aluminium Round Cable Multiple Conductor</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.No.</th>
              <th className="border border-gray-300 p-2">Normal Area of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 100 Mtrs 2 Core</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 100 Mtrs 3 Core</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 100 Mtrs 4 Core</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {aluminiumRoundCableData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate2Core}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkg2Core}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate3Core}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkg3Core}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate4Core}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkg4Core}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const CoaxialCableTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Co-axial Cable with Copper Conductor</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.No.</th>
              <th className="border border-gray-300 p-2">Size</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 100 Mtrs CCA</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 100 Mtrs Copper</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {coaxialCableData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.size}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rateCCA}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkgCCA}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rateCopper}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkgCopper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const ParallelFlatCableTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Parallel Flat Cable</h2>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">S.No.</th>
              <th className="border border-gray-300 p-2">Normal Area of Conductor (Sq. mm)</th>
              <th className="border border-gray-300 p-2">No. & Dimension (in mm)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 45 Mtrs</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
              <th className="border border-gray-300 p-2">Rate (in Rs.) Per 90 Mtrs</th>
              <th className="border border-gray-300 p-2">Pkg. (Coils)</th>
            </tr>
          </thead>
          <tbody>
            {parallelFlatCableData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.id}</td>
                <td className="border border-gray-300 p-2 text-center">{item.conductor}</td>
                <td className="border border-gray-300 p-2 text-center">{item.dimension}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate45Mtrs}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkg45Mtrs}</td>
                <td className="border border-gray-300 p-2 text-center">₹ {item.rate90Mtrs}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pkg90Mtrs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

  
  
  const tableProducts = () => {
    return (
      <div className="container mx-auto text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center my-8">
          ORFLAX EVO Series Price List
        </h1>
  
        <div>
          {/* MultiStrand Wires Section */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center underline font-semibold">
              MultiStrand Wires
            </h2>
            <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
              <img
                src={multistrandwire}
                className="mx-auto h-[20vh] md:h-[30vh] lg:h-[40vh] w-auto"
                alt=""
              />
              <PriceTable
                title="Multistrand Wire (90 MTR)"
                data={multistrandWireData90Mtr}
              />
            </div>
  
            <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
              <PriceTable
                title="Multistrand Wire (45 MTR)"
                data={multistrandWireData45Mtr}
              />
              <img
                src={wiregallery}
                className="mx-auto h-[20vh] md:h-[30vh] lg:h-[40vh] rounded-lg w-auto"
                alt=""
              />
            </div>
          </div>
  
          {/* MULTICORE ROUND FLEXIBLE CABLES */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center underline font-semibold">
              MULTICORE ROUND FLEXIBLE CABLES
            </h2>
            <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
              <img
                src={wirebundlegallery}
                className="mx-auto h-[30vh] md:h-[40vh] rounded-xl w-auto"
                alt=""
              />
              <MulticoreWireTable />
            </div>
          </div>
  
          {/* Submersible Cable Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <SubmersibleCableTable />
              <img
                src={submersibleimage}
                className="h-[20vh] md:h-[30vh] lg:h-[33vh] rounded-xl w-auto"
                alt=""
              />
            </div>
          </div>
  
          {/* Aluminium Cable Section */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center underline font-semibold">
              Aluminium Cable
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={roundalum}
                className="h-[20vh] md:h-[30vh] rounded-2xl w-auto"
                alt=""
              />
              <AluminiumCableTable />
            </div>
          </div>
  
          {/* Aluminium Solid Conductor Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <AluminiumSolidConductorTable />
              <img
                src={alum1}
                className="h-[30vh] md:h-[40vh] rounded-lg w-auto"
                alt=""
              />
            </div>
          </div>
  
          {/* Aluminium Single Core Table Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={singlecorealum}
                className="h-[20vh] md:h-[30vh] rounded-xl w-auto"
                alt=""
              />
              <AluminiumSingleCoreTable />
            </div>
          </div>
  
          {/* Aluminium Round Cable Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <AluminiumRoundCableTable />
              <img
                src={roundalum2}
                className="h-[20vh] md:h-[30vh] rounded-xl w-auto"
                alt=""
              />
            </div>
          </div>
  
          {/* Copper Coaxial Cable Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={coppercoxialimage}
                className="h-[20vh] md:h-[30vh] rounded-2xl w-auto"
                alt=""
              />
              <CoaxialCableTable />
            </div>
          </div>
  
          {/* Parallel Flat Cable Section */}
          <div className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <ParallelFlatCableTable />
              <img
                src={flatwire}
                className="h-[20vh] md:h-[30vh] w-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default tableProducts;
