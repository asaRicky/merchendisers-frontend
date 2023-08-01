import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import people from './assets/people.jpg';
import k from './assets/k.jpeg';
import wild from './assets/wilderbeastsss.jpg';

function About() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div>
      <main className="about-section">
        <div className="about-align">
          {/* About card */}
          <div className="about-card-container flex justify-center">
  <div className="about-card bg-white rounded-lg shadow-lg p-6 mb-6">
    <h1 className="text-blue-500 text-3xl font-bold mb-4">About Us</h1>
    <p className="text-gray-700">
      DANIL SCENIC TOURS is a private limited company registered in Kenya founded by two shareholders/directors. It is located along Northern Bypass, Ebenezer Building. Being licensed by the Tourism Regulatory Authority as a Tour operator, it provides practical support to local and Foreign tourists in Kenya and deals with various organizational aspects of a trip ranging from creating touristic packages, determining the needs of various categories of clients, and making travel arrangements (accommodation, transport, meals, tours, insurance, and so on).
      The company has competent staff members with requisite knowledge and skills in tourism.
    </p>
  </div>
</div>


          {/* Image container */}
          <div className="pic-container mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="about-card relative">
              <img
                src={k}
                alt="Image 1"
                className="about-image rounded-lg w-full"
              />
              <div className="about-card-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <a
                  href="#play-video"
                  onClick={() => setOpen(true)}
                  className="text-white font-bold underline"
                >
                  Click to Play Video
                </a>
              </div>
            </div>

            <div className="about-card relative">
              <img
                src={wild}
                alt="Image 2"
                className="about-image rounded-lg w-full"
              />
              <div className="about-card-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <a
                  href="#play-video"
                  onClick={() => setOpen(true)}
                  className="text-white font-bold underline"
                >
                  Click to Play Video
                </a>
              </div>
            </div>
          </div>

          {/* Additional about card */}
          <div className="about-card about-cta-card mt-6 bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-700">
              Come, experience the magic of Kenya, where adventure, culture, and natural beauty await.
              Your journey of a lifetime begins here, with us. Let's make your travel dreams a reality.
              Welcome To Kenya.
            </p>
            <button className="cta-button mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
              Book Your Adventure
            </button>
          </div>
        </div>
      </main>

      <ModalVideo channel='youtube' isOpen={isOpen} videoId='irG_Kj21c1I' onClose={() => setOpen(false)} />
      <ModalVideo channel='youtube' isOpen={isOpen2} videoId='uayhhleFczc' onClose={() => setOpen2(false)} />
    </div>
  );
}

export default About;