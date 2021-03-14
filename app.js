const app = Vue.createApp({
    // template: '<h3>I am learning Vue</h3>'
    data() {
        return {
            favo: 'favo',
            toggle_color: 'topic1',
            btn_up: '#FF6347',
            right: 'right', 
            btn_down: '#40E0D0',
            center: 'button-container',
            title: 'Ace model college',
            code: 'AMC',
            motto: 'Learning never ends',
            year: '2021',
            showStaffs: true,
            
            staffs: [
                {pic: 'img/1.jpg', role: 'Principal', salary: 20000, fav: true},
                {pic: 'img/2.jpg', role: 'Teacher', salary: 15000, fav: false},
                {pic: 'img/3.jpg', role: 'Cleaner', salary: 5000, fav: true},
                {pic: 'img/4.jpg', role: 'Gateman', salary: 5000, fav: true},
                {pic: 'img/5.jpeg', role: 'Security', salary: 5000, fav: false},
                ]
        }
    },
    methods : {
        toggleColor (e) {
            if (this.toggle_color == 'topic1') {
                this.toggle_color = 'topic2'
            }else{
                this.toggle_color = 'topic1'
            }console.log(e)
        },
        changeTitle (title) {
            // this.title = 'Ankerfield Model College'
            this.title = title
        },
        toggleShowStaffs () {
            this.showStaffs = !this.showStaffs
        },
        toggleFav (staff) {
            staff.fav = !staff.fav
        },
        updSal (staff) {
            staff.salary += 1000
        }
    },
    computed: {
        filteredStaffs () {
            return this.staffs.filter((staff) => staff.fav)
        }
    }
})

app.mount('#app')