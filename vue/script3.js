var app = new Vue({
	el: "#app",
	data: {
		id: "",
		name: "",
		address: "",
		students: []
	},
	methods: {
		addStudent: function() {
			this.students.push({
				id: this.id, 	
				name: this.name, 
				address: this.address
			})
			
			this.setDefault();
			this.setFocus();
		},
		removeStudent: function(index) {
			this.students.splice(index, 1);
		},
		setDefault: function() {
			this.id = "";
			this.name = "";
			this.address = "";
 		},
 		setFocus: function() {
 			$("#student_id").focus();
 		}
	}

});