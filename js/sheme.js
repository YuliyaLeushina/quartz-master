
document.getElementById('fartuk').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-fartuk').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-fartuk').classList.add('_active');
    }
});
document.getElementById('btn-fartuk').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        console.log('remove');
        this.classList.remove('_active');
        document.getElementById('fartuk').classList.remove('_spoller-active');
        
    }else if(!this.classList.contains('_active')){
        console.log('add');
        this.classList.add('_active');
        document.getElementById('fartuk').classList.add('_spoller-active');
        
    }
});
document.getElementById('stol').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-stol').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-stol').classList.add('_active');
    }
});
document.getElementById('btn-stol').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('stol').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('stol').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
document.getElementById('opora').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-opora').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-opora').classList.add('_active');
    }
});
document.getElementById('btn-opora').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('opora').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('opora').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
document.getElementById('kromka').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-kromka').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-kromka').classList.add('_active');
    }
});
document.getElementById('btn-kromka').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('kromka').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('kromka').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
document.getElementById('rakovina').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-rakovina').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-rakovina').classList.add('_active');
    }
});
document.getElementById('btn-rakovina').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('rakovina').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('rakovina').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
document.getElementById('bar').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-bar').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-bar').classList.add('_active');
    }
});
document.getElementById('btn-bar').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('bar').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('bar').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
document.getElementById('var').addEventListener('click', function(){
    if(this.classList.contains('_spoller-active')){
        this.classList.remove('_spoller-active');
        document.getElementById('btn-var').classList.remove('_active');
    }else{
        this.classList.add('_spoller-active');
        document.getElementById('btn-var').classList.add('_active');
    }
});
document.getElementById('btn-var').addEventListener('click', function(){
    if(this.classList.contains('_active')){
        document.getElementById('var').classList.remove('_spoller-active');
        this.classList.remove('_active');
    }else{
        document.getElementById('var').classList.add('_spoller-active');
        this.classList.add('_active');
    }
});
