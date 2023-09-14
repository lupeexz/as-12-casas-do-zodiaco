function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "gemeos";
        imagem.setAttribute("src","img/gemeos.jng");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo. ";
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Escorpiao";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "De personalidade por vezes altiva, porem nobre e justo. Durante a caçada aos Cavaleiros de Bronze influenciado pelo Grande Mestre, o Cavaleiro de Escorpião destruíu a Ilha de Andrômeda acreditando que seus habitantes haviam se rebelado contra o Santuário. ";
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena. ";
    }
    else if(valor=="cancer"){
        texto.innerHTML = "cancer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "O Contador da Morte é o Cavaleiro de Câncer e possui características um tanto diferentes em relação aos demais Cavaleiros de Ouro. O personagem é bastante poderoso e habilidoso, mas sempre é retratado de maneira caricata em razão do seu senso de humor. ";
    }
    else if(valor=="Capricornio"){
        texto.innerHTML = "capricornio";
        imagem.setAttribute("src","img/capriconio.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena. ";
    }
    else if(valor=="leao"){
        texto.innerHTML = "leao";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "o Cavaleiro de Leão é Regulus, companheiro de treinamento de Yato de Unicórnio. Ele é o mais jovem dos 12 Cavaleiros de Ouro e é considerado um prodígio, tendo muito poder e compreensão do Cosmo, aprendendo e entendendo golpes rapidamente. ";
    }
    else if(valor=="libra"){
        texto.innerHTML = "libra";
            imagem.setAttribute("src","img/libra.jpg");
            imagem.setAttribute("width","600px");
        texto.innerHTML = "Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades. ";
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "sagitario";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo. ";
    }
    else if(valor=="Touro"){
        texto.innerHTML = "touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Máscara da Morte é o mais astuto e cruel Cavaleiro de Ouro entre os Cavaleiros de Ouro do Zodíaco. Sua constelação é Câncer, e ele era originalmente o guardião do Templo de mesmo nome, protegendo o caminho para a Câmara Pontifícia e a Estátua de Atenas junto com os outros onze Cavaleiros de Ouro. ";
    }
    else if(valor=="virgem"){
        texto.innerHTML = "virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro. ";
    }
    else if(valor=="aries"){
        texto.innerHTML = "aries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "Em Alma de Ouro, o Cavaleiro de Áries permanece muito fiel à sua aparência no anime clássico. Mu é um homem de estatura alta e de pele clara. Possui longos e lisos cabelos lilás claro, olhos verde-escuros e finas sobrancelhas. ";
    }
    else if(valor=="aquario"){
        texto.innerHTML = "aquario";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","600px");
        texto.innerHTML = "é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário. ";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");

    }
}