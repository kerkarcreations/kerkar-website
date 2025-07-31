import React from 'react';
import './Stats.css';

const Stats: React.FC = () => {
  const statistics = [
    {
      number: "100+",
      label: "PROJECTS COMPLETED"
    },
    {
      number: "50+",
      label: "SUCCESSFUL COLLABORATIONS"
    },
    {
      number: "4+",
      label: "YEARS OF EXPERIENCE"
    }
  ];

  const clients = [
    {
      name: "Viber",
      logo: "/clients/viber.png", // Temporary fallback
      alt: "Viber"
    },
    {
      name: "Snap Inc",
      logo: "/clients/snap.png", // Temporary fallback
      alt: "Snap Inc"
    },
    {
      name: "Malinga",
      logo: "/clients/malinga.png", 
      alt: "Malinga"
    },
    {
      name: "Interscope",
      logo: "/clients/interscope.png",
      alt: "Interscope"
    },
    {
      name: "Hult Prize",
      logo: "/clients/hultprize.png", 
      alt: "Hult Prize"
    },
    {
      name: "Halo",
      logo: "/clients/halo.png", 
      alt: "Halo"
    },
    {
      name: "First Language Australia",
      logo: "/clients/firstlanguageaus.png", 
      alt: "First Language Australia"
    },
    {
      name: "Coca Cola",
      logo: "/clients/cocacola.png",
      alt: "Coca Cola" 
    }
  ];

  // Triple the clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="stats">
      {/* Statistics Section */}
      <div className="stats-container">
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">OUR CLIENTS</h2>
          <p className="clients-subtitle">
            WE PARTNER WITH THE WORLD'S LEADING COMPANIES TO HELP THEM ACHIEVE MORE.
          </p>
          
          <div className="clients-grid">
            <div className="clients-scroll">
              {duplicatedClients.map((client, index) => (
                <div key={`${client.name}-${index}`} className="client-item">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
