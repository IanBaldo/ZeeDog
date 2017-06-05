angular.module('zeedog', [])

.controller('mainCtrl', function ($scope, $timeout) {
    var emailList;
    $scope.availableImages = [
        'img/king_jambo_frente.jpg',
        'img/cachorro1.jpg',
        'img/familia_alienflex.jpg',
        'img/king_jambo_atributos.jpg'
    ];

    $scope.mainImg = $scope.availableImages[0];
    $scope.userEmail = '';
    $scope.alert ={
        show: false,
        type: '',
        message: ''
    };
    
    // Se já existir uma lista de e-mails cadastrados, carrega a lista
    if (localStorage.getItem('emailList') != null) {
        emailList = JSON.parse(localStorage.getItem('emailList'));
    }
    else {
        emailList = [];
    }

    // Verifica e Registra o e-mail
    $scope.registerUser = function () {
        if(/\S+@\S+\.\S+/.test($scope.userEmail)){
            // E-mail parece válido
            // Podemos adicionar na lista
            emailList.push($scope.userEmail);

            // Prepara e exibe o alerta por 5 segundos
            $scope.alert.message = 'E-mail cadastrado com sucesso!';
            $scope.alert.type = 'alert-success';
            showAlert(5);

            // Pode limpar o campo
            $scope.userEmail = '';

            // Salva lista atualizada
            localStorage.setItem('emailList', JSON.stringify(emailList));
        }
        else {
            // E-mail falhou na validação
            // Prepara e exibe o alerta por 5 segundos
            $scope.alert.message = 'E-mail inválido';
            $scope.alert.type = 'alert-danger';
            showAlert(5);
        }

        console.log('Usuários Registrados:\n');
        for (var inx in emailList) {
            console.log(emailList[inx]+'\n');
        }
    }


    $scope.changeImage = function (imgPath) {
        $scope.mainImg = imgPath;
    }

    // Exibe o alerta por 'timeout' segundos
    function showAlert(timeout) {
        console.log($scope.alert);
        $scope.alert.show = true;
        console.log($scope.alert);
        $timeout(function() {
            $scope.alert.show = false
        }, 1000 * timeout);
    }

})