<template>
<div>
    <div class="alert alert-success">
        Yay we have a game!
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card" >
                    <h5 class="card-header">
                        Players
                        <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: playerId() !== null}">+</a>
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="p in state.players" :key="p.id"
                            class="list-group-item">
                            <img />
                            <h5>{{p.name}}</h5>
                            <span class="badge badge-primary badge-pill">{{p.score}}</span>
                        </li>
 
                    </ul>
            </div>
            <div class="card" >
                <h5 class="card-header">My Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in myCaptions" :key="c" class="list-group-item">{{c}}</li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary">Flip Picture</a>

            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <h5 class="card-header">Played Captions</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in state.playedCaptions" :key="c.text" class="list-group-item">{{c}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    li.list-group-item {
        display: flex;
        align-content: center;
        justify-content: space-between;
        img {
            width: 30px; height: 30px;
            margin-right: 5px;
        }
        h5 {
            flex-grow: 1;
        }
    }
</style>

<script>
import { GetState, FlipPicture, GetMyCaptions, Login, playerId } from '@/services/api_access';

export default {
    data: function(){
        return {
            state: {
                picture: "",
                players: [],
                playedCaptions: [],
            },
            myCaptions: [],
            //playerId: null
        }
    },
    created: function(){
        this.refresh();
    },
    methods: {
        refresh(){
            GetState()
            .then(x=> this.state = x)
        },
        flipPicture: function(){
            FlipPicture()
            .then(()=> this.refresh())
        },
        login: function() {
            Login(prompt('What is your name?'))
            .then(()=>  GetMyCaptions().then(x=> this.myCaptions = x) )
            .then(()=> this.refresh())
        },
        playerId: ()=> playerId
    }
}
</script>
