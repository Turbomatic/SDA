class BasicInfo {
    constructor(name, title, email, phone, location) {
      this.name = name;
      this.title = title;
      this.email = email;
      this.phone = phone;
      this.location = location;
    }
  
    populateForm() {
      document.getElementById("name").value = this.name;
      document.getElementById("title").value = this.title;
      document.getElementById("email").value = this.email;
      document.getElementById("phone").value = this.phone;
      document.getElementById("location").value = this.location;
    }
  }
  
  class WorkExperience {
    constructor(jobTitle, workplace, summary) {
      this.jobTitle = jobTitle;
      this.workplace = workplace;
      this.summary = summary;
    }
  
    populateForm() {
      document.getElementById("job-title").value = this.jobTitle;
      document.getElementById("workplace").value = this.workplace;
      document.getElementById("work-summary").value = this.summary;
    }
  }
  
  class Skills {
    constructor(skill1, skill2) {
      this.skill1 = skill1;
      this.skill2 = skill2;
    }
  
    populateForm() {
      document.getElementById("skill-1").value = this.skill1;
      document.getElementById("skill-2").value = this.skill2;
    }
  }
  
  class ForeignLanguage {
    constructor(language1, language1Level, language2, language2Level) {
      this.language1 = language1;
      this.language1Level = language1Level;
      this.language2 = language2;
      this.language2Level = language2Level;
    }
  
    populateForm() {
      document.getElementById("language-1").value = this.language1;
      document.getElementById("language-1-level").value = this.language1Level;
      document.getElementById("language-2").value = this.language2;
      document.getElementById("language-2-level").value = this.language2Level;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const basicInfo = new BasicInfo("John Doe", "Web Developer", "john.doe@example.com", "+355 68 68 68 686", "Example City");
    basicInfo.populateForm();
  
    const workExperience = new WorkExperience("Software Engineer", "XYZ Company", "Developed web applications using modern frameworks.");
    workExperience.populateForm();
  
    const skills = new Skills("JavaScript", "React");
    skills.populateForm();
  
    const foreignLanguages = new ForeignLanguage("English", "Fluent", "Spanish", "Intermediate");
    foreignLanguages.populateForm();
  });
  