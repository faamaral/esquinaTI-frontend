<template>
    <article>
        <div class="container" :class="{'Cadastrar-atividade' : Cadastrar}">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-left">
                        <h2>Bem-Vindo de volta!</h2>
                        <p>Por favor, entre com seus dados</p>
                        <button class="invert" id="Entrar" @click="Cadastrar = !Cadastrar">Entrar</button>
                    </div>
                    <div class="overlay-right">
                        <h2>Olá Amigo(a)!</h2>
                        <p>Por favor, entre com seus dados pessoais</p>
                        <button class="invert" id="Cadastrar" @click="Cadastrar = !Cadastrar">Cadastrar</button>
                    </div>
                </div>
            </div>
            <form class="Cadastrar" action="#">
                <h2>Criando Acesso</h2>
                <div>Use o seu e-mail para criar um registro</div>
                <input type="text" placeholder="Nome Completo" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Nome Usuário" />
                <input type="password" placeholder="Senha" />
                <button>Cadastrar</button>
            </form>
            <form class="Entrar" action="#">
                <h2>Acesse aqui</h2>
                <div>Use o seu acesso para entrar</div>
                <input type="text" placeholder="Nome Usuário" />
                <input type="password" placeholder="Senha" />
                <a href="#">Esqueceu sua senha?</a>
                <button>Entrar</button>
            </form>
        </div>
    </article>
</template>

<script>
    export default{
        data: () => {
            return{
                Cadastrar: false
            }
        } 
    }
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        width:768px;
        height: 480px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                    0 10px 10px rgba(0, 0, 0, .2);
        background: linear-gradient(to bottom, #efefef, #ccc);

        .overlay-container{
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform .5s ease-in-out;
            z-index: 100;
        }

        .overlay{
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            background: linear-gradient(to bottom right, #7fd625, #009345);
            color: #fff;
            transform: translateX(0);
            transition: transform .5s ease-in-out;
        }

        @mixin overlays($property){
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            padding: 70px 40px;
            width: calc(50% - 80px);
            height: calc(100% - 140px);
            text-align: center;
            transform: translateX($property);
            transition: transform .5s ease-in-out;
        }
        .overlay-left{
            @include overlays(-20%);
        }

        .overlay-right{
            @include overlays(0);
            right: 0;
        }
    }

    h2{
        margin: 0;
    }

    p{
        margin: 20px 0 30px;
    }

    a{
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1rem;
    }

    button{
        border-radius: 20px;
        border: 1px solid #009345;
        background-color: #009345;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform .1s ease-in;

        &:active{
            transform: scale(.9);
        }

        &:focus{
            outline: none;
        }
    }

    button.invert{
        background-color: transparent;
        border-color: #fff;
    }

    form{
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 90px 60px;
        width: calc(50% - 120px);
        height: calc(100% - 180px);
        text-align: center;
        background: linear-gradient(to bottom, #efefef, #ccc);
        transition: all .5s ease-in-out;

        div{
            font-size: 1rem;
        }

        input{
            background-color: #eee;
            border: none;
            padding: 8px 15px;
            margin: 6px 0;
            width: calc(100% - 30px);
            border-radius: 15px;
            border-bottom: 1px solid #ddd;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4),
                                0 -1px 1px #fff,
                                0 1px 0 #fff;
            overflow: hidden;

            &:focus{
                outline: none;
                background-color: #fff;
            }
        }
    }

    .Entrar{
        left: 0;
        z-index: 2;
    }

    .Cadastrar{
        left: 0;
        z-index: 1;
        opacity: 0;
    }

    .Cadastrar-atividade{
        .Entrar{
            transform: translateX(100%);
        }

        .Cadastrar{
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: show .4s;
        }

        .overlay-container{
            transform: translateX(-100%);
        }

        .overlay{
            transform: translateX(50%);
        }

        .overlay-left{
            transform: translateX(0);
        }

        .overlay-right{
            transform: translateX(20%);
        }
    }

    @keyframes show{
        0%{
            opacity: 0;
            z-index: 1;
        }
        49%{
            opacity: 0;
            z-index: 1;
        }
        50%{
            opacity: 1;
            z-index: 10;
        }
    }
</style>
