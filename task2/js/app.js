angular.module('zeedog', [])

.controller('mainCtrl', function ($scope) {
    var emailList;
    $scope.availableImages = [
        'img/king_jambo_frente.jpg',
        'img/cachorro1.jpg',
        'img/familia_alienflex.jpg',
        'img/king_jambo_atributos.jpg'
    ];

    $scope.mainImg = $scope.availableImages[0];
    $scope.userEmail = '';
    $scope.emailValidated = true;  // Necessário para a bprda não começar vermelha
    
    // Se já existir uma lista de e-mails cadastrados, carrega a lista
    if (localStorage.getItem('emailList') != null) {
        emailList = JSON.parse(localStorage.getItem('emailList'));
    }
    else {
        emailList = [];
    }

    $scope.registerUser = function () {
        if(/\S+@\S+\.\S+/.test($scope.userEmail)){
            // E-mail parece válido
            // Podemos adicionar na lista

            $scope.emailValidated = true;
            emailList.push($scope.userEmail);

            // Pode limpar o campo
            $scope.userEmail = '';

            // Salva lista atualizada
            localStorage.setItem('emailList', JSON.stringify(emailList));
        }
        else {
            // E-mail falhou na validação
            alert('falhoiu');
            $scope.emailValidated = false;
        }

        console.log('Usuários Registrados:\n');
        for (var inx in emailList) {
            console.log(emailList[inx]+'\n');
        }
    }


    $scope.changeImage = function (imgPath) {
        $scope.mainImg = imgPath;
    }

})