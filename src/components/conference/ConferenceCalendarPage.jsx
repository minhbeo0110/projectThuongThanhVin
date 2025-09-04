import React, { useState } from 'react';
import './ConferenceCalendarPage.css';
import { redirectTo } from '../common/utils';

const ConferenceCalendarPage = () => {
  const [selectedYear, setSelectedYear] = useState('2026');

  const conferences = [
    // 2026
    {
      id: 1,
      year: 2026,
      time: "February 25 - 27, 2026",
      conference: "International Conference on Advanced Microscopy for Life Sciences and Materials",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 2,
      year: 2026,
      time: "March, 2026",
      conference: "5th Hardware camp for fast and low-light detection",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 3,
      year: 2026,
      time: "March 9 - 12, 2026",
      conference: "5th International Conference on Environmental Pollution, Restoration, and Management",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 4,
      year: 2026,
      time: "March 19 - 21, 2026",
      conference: "The 16th AFOB Regional Symposium (Ars 2026) Biotechnology For Sustainable Development",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 5,
      year: 2026,
      time: "March 26 - 28, 2026",
      conference: "The Second Vietnam International Symposium on Medicinal Plants and Natural Products (MPNP2026)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 6,
      year: 2026,
      time: "June 8 - 12, 2026",
      conference: "Soft Matter",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 7,
      year: 2026,
      time: "July, 2026",
      conference: "10th Vietnam School of Astrophysics (VSOA10)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 8,
      year: 2026,
      time: "July, 2026",
      conference: "10th Vietnam School on Neutrinos (VSON10)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 9,
      year: 2026,
      time: "July, 2026",
      conference: "2nd Vietnam School of Artificial Intelligence and Quantum Computing (2VSAIQC)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 10,
      year: 2026,
      time: "August 5-8, 2026",
      conference: "The 13th Vietnam Summer School of Science - VSSS'13",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 11,
      year: 2026,
      time: "August 11-14, 2026",
      conference: "The 3rd International Conference on Microbiology and One Health",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    // 2025
    {
      id: 12,
      year: 2025,
      time: "January 15-18, 2025",
      conference: "International Conference on Materials Science and Engineering",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 13,
      year: 2025,
      time: "February 20-23, 2025",
      conference: "5th International Conference on Environmental Science and Technology",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 14,
      year: 2025,
      time: "March 10-13, 2025",
      conference: "Advanced Computational Methods in Chemistry",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 15,
      year: 2025,
      time: "April 5-8, 2025",
      conference: "International Symposium on Sustainable Energy",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 16,
      year: 2025,
      time: "May 12-15, 2025",
      conference: "Vietnam Conference on Artificial Intelligence and Machine Learning",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 17,
      year: 2025,
      time: "June 20-23, 2025",
      conference: "International Workshop on Quantum Computing",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 18,
      year: 2025,
      time: "July 8-11, 2025",
      conference: "9th Vietnam School of Astrophysics (VSOA9)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 19,
      year: 2025,
      time: "August 15-18, 2025",
      conference: "The 12th Vietnam Summer School of Science - VSSS'12",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    // 2024
    {
      id: 20,
      year: 2024,
      time: "January 20-23, 2024",
      conference: "International Conference on Nanotechnology and Materials",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 21,
      year: 2024,
      time: "March 15-18, 2024",
      conference: "4th International Conference on Environmental Science",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 22,
      year: 2024,
      time: "May 10-13, 2024",
      conference: "Vietnam Conference on Computational Chemistry",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 23,
      year: 2024,
      time: "July 5-8, 2024",
      conference: "8th Vietnam School of Astrophysics (VSOA8)",
      link: "https://www.icisequynhon.com/conference-calendar/"
    },
    {
      id: 24,
      year: 2024,
      time: "August 12-15, 2024",
      conference: "The 11th Vietnam Summer School of Science - VSSS'11",
      link: "https://www.icisequynhon.com/conference-calendar/"
    }
  ];

  // Lấy danh sách năm unique
  const availableYears = Array.from(new Set(conferences.map(conf => conf.year))).sort((a, b) => b - a);

  // Filter conferences theo năm được chọn
  const filteredConferences = conferences.filter(conf => conf.year.toString() === selectedYear);

  const handleConferenceClick = (link) => {
    redirectTo(link, true);
  };

  return (
    <div className="conference-calendar-page">
      <div className="conference-container">
        <span className="conference-page-title">Conference Calendar</span>
        
        <div className="conference-layout">
          {/* Sidebar với danh sách năm */}
          <div className="year-sidebar">
            <h3 className="year-title">Year</h3>
            <div className="year-list">
              {availableYears.map(year => (
                <div
                  key={year}
                  className={`year-item ${selectedYear === year.toString() ? 'active' : ''}`}
                  onClick={() => setSelectedYear(year.toString())}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Main content với bảng conferences */}
          <div className="conference-content">
            <div className="conference-table-container">
              <table className="conference-table">
                <thead>
                  <tr>
                    <th className="index-col">#</th>
                    <th className="time-col">Time</th>
                    <th className="conference-col">Conference</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredConferences.map((conference, index) => (
                    <tr 
                      key={conference.id}
                      className="conference-row"
                      onClick={() => handleConferenceClick(conference.link)}
                    >
                      <td className="index-cell">{index + 1}</td>
                      <td className="time-cell">{conference.time}</td>
                      <td className="conference-cell">
                        <span className="conference-name">{conference.conference}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCalendarPage;
