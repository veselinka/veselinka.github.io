function solve() {
  var Course = {
    init: function(title, presentations) {
      this.title="";
      this.students=[];
      this.id=0;
      this.presentations=[];
      if(title==='' || title.trim().length!==title.length){
        throw '';
      }
      if (presentations.length===0) {
        throw 'There are no presentations';
      }
    },
    addStudent: function(name) {
      var name=[];

    },
    getAllStudents: function() {
      return this.students;
    },
    submitHomework: function(studentID, homeworkID) {
      if(typeof(studentID)!==Number){
        throw "";
      }
      if (studentID % 1 !== 0) {
            throw '';
          }
          if (studentID < 0) {
            throw '';
          }
    },
    pushExamResults: function(results) {

    },
    getTopStudents: function() {
      for (var i = 0; i <10; i++) {
        students[i];
        students.usort(function(a, b) {
          return a - b;
        });
      }
    }
  };

  return Course;
}
module.export=solve();