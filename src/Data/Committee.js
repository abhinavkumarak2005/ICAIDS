const Organizing_Secretaries = [
  "Dr. J. Jayabharathy, Professor, CSE, PTU",
  "Dr. K. Sathiyamurthy, Professor, CSE, PTU",
  "Dr. M. Thirumaran, Professor, CSE, PTU",
  "Dr. J. I. Sheeba, Associate Professor, CSE, PTU",
];

const Joint_Secretaries = [
  "Dr. R. Kalpana, Professor, CSE, PTU",
  "Dr. K. Saruladha, Professor, CSE, PTU",
  "Dr. N. Sivakumar, Professor, CSE, PTU",
  "Dr. V. Akila, Associate Professor, CSE, PTU",
];

const dept_advisory = [
  "Dr. N. Sreenath, Professor, CSE, PTU",
  "Dr. R. Manoharan, Professor, CSE, PTU",
  "Dr. F. Sagayaraj Francis, Professor, CSE, PTU",
  "Dr. G. Zayaraz, Professor, CSE, PTU",
  "Dr. S. Lakshmana Pandian, Professor, CSE, PTU",
  "Dr. E. Karunakaran, Professor, CSE, PTU",
  "Dr. R. Sarala, Professor, CSE, PTU",
  "Dr. J. Kumaran @ Kumar, Professor, CSE, PTU",
  "Dr. M. Thenmozhi, Associate Professor, CSE, PTU",
  "Dr. P. Salini, Associate Professor, CSE, PTU",
  "Dr. R. Kavitha Kumar, Programmer, CSE, PTU",
];

const state_advisory = [
  "Dr. R. Subramanian, Professor, Pondicherry University, Puducherry",
  "Dr. K. Vivekanandan, Director (Academic and Educational Innovations), PTU",
  "Dr. Ka. Selvaradjou, Director (Planning and Development), PTU",
  "Dr. P. Ramesh Babu, Director (Research), PTU",
  "Dr. A. Amuthan, Professor, CSE, PTU, Private Secretary to CM, Govt. of Puducherry",
  "Dr. V. Prasanna Venkatesan, Professor, Pondicherry University",
  "Dr. Narendran Rajagopalan, Associate Professor, NIT Puducherry",
  "Dr. S. Abarna, Assistant Professor, Rashtriya Raksha University, Puducherry Campus, Puducherry",
];

const national_advisory = [
  "Dr. V. Masilamani, Professor and Dean, IIITDM Kancheepuram, Tamil Nadu",
  "Dr. P. Varalakshmi, Professor, Anna University, Tamil Nadu",
  "Dr. Srinivasa Rao Battula, Professor, University of Hyderabad, Hyderabad, Telangana",
  "Dr. Vishal Goyal, Professor, Punjab University, Patiala, Punjab",
  "Dr. H. N. Champa, Professor, University of Visvesvaraya College of Engineering (UVCE), Bengaluru",
  "Dr. Manisha Mittal, Associate Professor, Guru Tegh Bahadur Institute of Technology, New Delhi",
  "Dr. Rajendra Prasath, Associate Professor, IIIT Sri City, Chittoor, Andhra Pradesh",
  "Dr. K. A. Muthukumar, Head of Centre of Excellence IoT & AI Healthcare, UPES Dehradun, Uttarakhand",
  "Dr. A. S. N. Chakravarthy, Professor, Director of IT Infrastructure, JNTU, Hyderabad, Telangana",
  "Dr. Abhishek Ray, Professor & Dean Industry Engagement(s), KIIT, deemed to be University, Bhubaneswar",
  "Dr. S. G. Shaila, Professor & Chairperson, Dayananda Sagar University, Bangalore",
  "Dr. Vijaykumar S. Bidve, Associate Professor, Symbiosis Skills and Professional University, Pune",
  "Dr. Priyank Thakkar, Associate Professor, Nirma University, Ahmedabad, Gujarat",
  "Dr. Kalyan Sasidhar, Associate Professor, DA-IICT, Gandhinagar, Gujarat",
  "Dr. Bhawna Sharma, Professor, Government College of Engineering & Technology, Jammu",
  "Dr. G. Venkateswara Rao, Professor, GITAM University, Visakhapatnam, Andhra Pradesh",
  "Dr. S. Nickolas, Professor, NIT Trichy, Tamil Nadu",
  "Dr. Y. N. Singh, Professor, Institute of Engineering and Technology, Lucknow, Uttar Pradesh",
  "Dr. B. G. Geetha, Professor & Director (IT&IM), K.S.R College of Technology, Tamil Nadu",
  "Dr. T. Senthil Kumar, Professor, Amrita University, Coimbatore, Tamil Nadu",
  "Dr. Amritanshu Pandey, Associate Professor, IIT(BHU), Varanasi, Uttar Pradesh",
  "Dr. N. Poonguzhali, Associate Professor, Jawaharlal Nehru University, New Delhi",
  "Dr. U. S. N. Raju, Associate Professor, NIT Warangal, Telangana",
  "Dr. Ashish Raman, Associate Professor, NIT Jalandhar, Punjab",
  "Dr. Debadatta Pati, Associate Professor, NIT Nagaland",
  "Dr. Rohit Kumar, Assistant Professor, Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat",
  "Dr. Paramartha Dutta, Professor, Visva Bharati, Santiniketan, West Bengal",
  "Dr. V. Palanisamy, Senior Professor and Head, Alagappa University, Karaikudi, Tamil Nadu",
  "Dr. E. Chandra, Professor and Head, Bharathiar University, Coimbatore, Tamil Nadu",
  "Dr. R. Bhavani, Professor and Head, Annamalai University, Tamil Nadu",
  "Dr. Majid Zaman, Scientist E, University of Kashmir, Kashmir",
  "Dr. V. D. Ambeth Kumar, Associate Professor, Mizoram University, Mizoram",
  "Dr. Animesh Dutta, Associate Professor, NIT Durgapur, West Bengal",
  "Dr. V. Pattabiraman, Professor, Vellore Institute of Technology University, Chennai, Tamil Nadu",
  "Dr. D. Murugan, Professor, Manonmaniam Sundaranar University, Tamil Nadu",
  "Dr. S. S. Sridhar, Professor, SRM University, Kattankulathur, Tamil Nadu",
  "Dr. M. Pushpa Rani, Professor & Director, Mother Teresa Women’s University, Tamil Nadu",
  "Dr. M. K. Sabu, Professor, Cochin University of Science and Technology, Cochin, Kerala",
  "Dr. R. V. Siva Balan, Associate Professor, Christ University, Bengaluru, Karnataka",
  "Dr. D. Vaithiyanathan, Assistant Professor, NIT Delhi",
  "Dr. Nanda Dulal Jana, Assistant Professor, NIT Durgapur, West Bengal",
  "Dr. K. Anitha Kumari, Associate Professor, PSG College of Technology, Coimbatore, Tamil Nadu",
  "Dr. Debdatta Kandar, Associate Professor, North-Eastern Hill University, Shillong, Meghalaya",
  "Dr. Aswani Kumar Cherukuri, Professor, Vellore Institute of Technology, Vellore, Tamil Nadu",
  "Dr. E. Kannan, Registrar and Professor, Vel Tech Institute of Science & Technology, Chennai",
  "Dr. S. Padmavathi, Professor, Thiagarajar College of Engineering, Madurai, Tamil Nadu",
  "Dr. Karthikeyan Vaiapury, Scientist, TCS Innovations Labs, Tata Consultancy Services, Chennai",
];

const international_advisory = [
  "Dr. Joan Lu, Professor, University of Huddersfield, United Kingdom",
  "Dr. Paul Rodrigues, King Khalid University, Abha, Saudi Arabia",
  "Dr. Balaji Palanisamy, Director of Graduate Studies, University of Pittsburgh, USA",
  "Dr. Shuai Li, Professor, University of Oulu, Finland",
  "Dr. Lipo Wang, Associate Professor, Nanyang Technological University, Singapore",
  "Dr. Raja Muthalagu, Associate Professor, BITS, Dubai Campus",
  "Dr. Ganesh Neelakanta Iyer, Lecturer, National University of Singapore",
  "Dr. P. S. Tamizharasan, Assistant Professor, Deputy Head, BITS, Dubai Campus",
  "Dr. Chin Kim On, Associate Professor, Universiti Malaysia Sabah, Malaysia",
  "Dr. Athirai A. Irissappane, Principal ML Engg. (Applied Science), Walmart, USA",
  "Mr. Ganapathi Subramaniam, Information Security Director, Europe and ISMEA, UPS Limited UK",
];

export {
  Organizing_Secretaries,
  Joint_Secretaries,
  dept_advisory,
  state_advisory,
  national_advisory,
  international_advisory,
};
