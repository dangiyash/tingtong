document.addEventListener("DOMContentLoaded", function() {
    // Add member cards dynamically
    const membersSection = document.getElementById("membersSection");
  
    const members = [
      { name: "Project 1", description: "Project 1 will be added here soon.", image: "member1.jpg" },
      { name: "Project 2", description: "Project 2 will be added here soon", image: "member2.jpg" },
      // Add more members as needed
    ];
  
    members.forEach(member => {
      const memberCard = document.createElement("div");
      memberCard.className = "member-card";
  
      const img = document.createElement("img");
      img.src = member.image;
      img.alt = member.name;
  
      const h2 = document.createElement("h2");
      h2.textContent = member.name;
  
      const p = document.createElement("p");
      p.textContent = member.description;
  
      memberCard.appendChild(img);
      memberCard.appendChild(h2);
      memberCard.appendChild(p);
  
      membersSection.appendChild(memberCard);
    });
  });
  