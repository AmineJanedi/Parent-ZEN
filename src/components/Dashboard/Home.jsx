 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import axios from 'axios';
 import React, { useState, useEffect } from 'react';
function Home() {

    const data = [
        {
          name: '2024',
          uv: 5,
          pv: 15,
          amt: 50,
        },
        {
          name: '2025',
          uv: 1,
          pv: 25,
          amt: 50,
        },
        {
          name: '2026',
          uv: 3 ,
          pv: 30,
          amt: 50,
        },
        {
          name: '2027',
          uv: 25,
          pv: 10,
          amt: 50,
        },
        {
          name: '2028',
          uv: 25,
          pv: 35,
          amt: 50,
        },
        {
          name: '2029',
          uv: 27,
          pv: 36,
          amt: 50,
        },
        {
          name: '2030',
          uv: 5,
          pv: 10,
          amt: 50,
        },
      ];
        const [nombreProduits, setNombreProduits] = useState();
        const [nombreAllergies, setnombreAllergies] = useState();

        useEffect(() => {
          axios.get('http://localhost:4001/Produit/nombreProduits')
            .then(response => {
              setNombreProduits(response.data.nombreProduits);
            })
            .catch(error => {
              console.error('Erreur lors de la récupération du nombre de produits :', error);
            });
        }, []);
        useEffect(() => {
          axios.get('http://localhost:4001/Allergie/nombreAllergies')
            .then(response => {
              setnombreAllergies(response.data.nombreAllergies);
            })
            .catch(error => {
              console.error('Erreur lors de la récupération du nombre de produits :', error);
            });
        }, []);
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>DASHBOARD</h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <i className='fa-solid fa-cart-shopping'style={{ fontSize: '36px' }}></i>
                </div>
                <h1>{nombreProduits}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALLERGIES</h3>
                    <i className="fa-solid fa-hospital-user"style={{ fontSize: '36px' }} > </i>         
                      </div>
                <h1>{nombreAllergies}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>COMMANDES</h3>
                    <i class="fa-solid fa-truck-arrow-right" style={{ fontSize: '36px' }}> </i>         
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REVENUE</h3>
                    <i class="fa-solid fa-sack-dollar" style={{ fontSize: '36px' }}></i>    
                                </div>
                <h1>1,100 DT</h1>
                
            </div>
            <div className='main-title'>
            <h2>STATISTIQUES</h2>
        </div>
    <div className='stats'>
            <div className='card1'>
                <div className='card-inner'>
                    <h3>BUVETTES</h3>
                    <i class="fa-solid fa-store" style={{ fontSize: '36px' }}></i>
                </div>
                <h1>7</h1>
                
            </div>
            </div>
            <div className='stats'>
            <div className='card1'>
                <div className='card-inner'>
                    <h3> PARENTS</h3>
                    <i class="fa-solid fa-users" style={{ fontSize: '36px' }}></i>
                </div>
                <h1>10</h1>
                </div>
            </div>
            <div className='stats'>
            <div className='card1'>
                <div className='card-inner'>
                    <h3>BRACELET VENDU</h3>
                    <i class="fa-solid fa-circle-check"style={{ fontSize: '36px' }}></i>
                </div>
                <h1>10</h1>
                </div>
            </div>
            
        </div>
      
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            </div> 
    </main>
  )
}

export default Home