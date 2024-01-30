document.addEventListener("DOMContentLoaded", function () {
    const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");
    const resetBtn = document.getElementById("resetBtn");
    const counterElement = document.getElementById("counter");
    const changeColorSchemeBtn = document.getElementById("changeColorScheme");
    const employeeBtn = document.getElementById("employeeBtn");
    const specialBtn = document.getElementById("specialBtn");
    const navbar = document.getElementById("navbar");
  
    const startBtn = document.querySelector(".start-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const endBtn = document.querySelector(".end-btn");
  
    const employeeSection = document.querySelector('.employee-section');
    const personImg = document.getElementById("person-img");
    const authorElement = document.getElementById("author");
    const jobElement = document.getElementById("job");
    const infoElement = document.getElementById("info");
  
    let counter = 0;
    let employeeIndex = 0;
  
    // Info for Buttons 5 + 6 
    const employeeStatements = [
      {
        name: 'Ethan Bing',
        title: 'Cargo Pricing Manager',
        thought: 'Never loved a job this much!',
        img: 'https://th.bing.com/th/id/OIP.I_03m4cpV35jEIpy30Vl6wHaEK?rs=1&pid=ImgDetMain'
      },
      {
        name: 'Sarah Martinez',
        title: 'Cabin Crew',
        thought: 'Air Canada has many wonderful opportunities.',
        img: 'https://th.bing.com/th/id/R.02f123648e0d2749c8045dc5298bdbc5?rik=p7WG6Hj3VYu3Jw&pid=ImgRaw&r=0'
      },
      {
        name: 'Amilia Anderson',
        title: 'Pilot',
        thought: 'Working at Air Canada is amazing.',
        img: 'https://th.bing.com/th/id/R.f6d34f98d0865d6fa91e9c8e58bb4676?rik=LYGSLYfp9%2fG8Cw&pid=ImgRaw&r=0'
      },
      {
        name: 'Nick Pink',
        title: 'Pilot',
        thought: 'I Love working at Air Canada.',
        img: 'https://th.bing.com/th/id/R.fcccb7480150ec3e0863279cf54d8178?rik=4mcHWkkJcBJqWw&pid=ImgRaw&r=0'
      }
    ];
  
   
    if (employeeSection) {
      employeeSection.style.display = 'none';
    }
  
    likeBtn.addEventListener("click", () => {
      updateCounter(1);
    });
  
    dislikeBtn.addEventListener("click", () => {
      updateCounter(-1);
    });
  
    resetBtn.addEventListener("click", () => {
      resetCounter();
    });
  
    changeColorSchemeBtn.addEventListener("click", changeColorScheme);
  
    employeeBtn.addEventListener("click", () => {
      showEmployeeStatement();
    });
  
    specialBtn.addEventListener("click", () => {
      showSpecialConfetti();
    });
  
    startBtn.addEventListener("click", () => {
      showStartEmployee();
    });
  
    prevBtn.addEventListener("click", () => {
      showPrevEmployee();
    });
  
    nextBtn.addEventListener("click", () => {
      showNextEmployee();
    });
  
    endBtn.addEventListener("click", () => {
      showEndEmployee();
    });
  
    // Functions for Buttons 1 + 2 + 3
    function updateCounter(value) {
      counter += value;
      renderCounter();
    }
  
    function resetCounter() {
      counter = 0;
      renderCounter();
    }
  
    function renderCounter() {
      if (counterElement) {
        counterElement.textContent = `Counter: ${counter}`;
        counterElement.style.color = counter > 0 ? "green" : counter < 0 ? "red" : "black";
      }
    }
  
    function changeColorScheme() {
      const colorSchemes = [
        "#212F3C", "#1F618D", "#1C2833", "#2874A6", "#641E16", "#7B241C" 
      ];
      const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
      document.body.style.backgroundColor = randomColor;
    }
  
    // Button 5+6 functions
    function showEmployeeStatement() {
      
      const boxContainers = document.querySelectorAll('.box-container');
      boxContainers.forEach(container => {
        container.style.display = 'none';
      });
  
      const currentEmployee = employeeStatements[employeeIndex];
      personImg.src = currentEmployee.img;
      authorElement.textContent = currentEmployee.name;
      jobElement.textContent = currentEmployee.title;
      infoElement.textContent = currentEmployee.thought;
  
      // Toggle the display property of the employee section
      if (employeeSection) {
        employeeSection.style.display = 'block';
      }
    }
  
    function showStartEmployee() {
      employeeIndex = 0;
      showEmployeeStatement();
    }
  
    function showPrevEmployee() {
      employeeIndex = (employeeIndex - 1 + employeeStatements.length) % employeeStatements.length;
      showEmployeeStatement();
    }
  
    function showNextEmployee() {
      employeeIndex = (employeeIndex + 1) % employeeStatements.length;
      showEmployeeStatement();
    }
  
    function showEndEmployee() {
      employeeIndex = employeeStatements.length - 1;
      showEmployeeStatement();
    }
  
    // Functions for Button 7
    function showSpecialConfetti() {
      alert("Have a nice day!");
      confetti();
    }
  
    function toggleNavbar() {
      if (navbar) {
        navbar.classList.toggle("show");
      }
    }
  
    renderCounter();
  });