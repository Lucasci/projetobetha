function SecretariaController ($scope) {

	$scope.usuariosC = [
		{
			id: 1,
			name: 'Lucas',
			price: 300,
			active: false,
			pago: 'Não'
		}, {
			id: 2,
			name: 'Beatriz',
			price: 400,
			active: false,
			pago: 'Não'
		}, {
			id: 3,
			name: 'Luan',
			price: 250,
			active: false,
			pago: 'Não'
		}, {
			id: 4,
			name: 'Juliana',
			price: 220,
			active: false,
			pago: 'Não'
		}
	];
	$scope.toggleActive = function (s) {
		
		if(s.pago == 'Não'){
    		if (confirm("Deseja efutar o pagamento?")){
    			s.active = !s.active;
				s.pago='Sim';
			}
		}else{
			if (confirm("Deseja anular o pagamento?")){
    			s.active = !s.active;
				s.pago='Não';
			}
		}
	};
	$scope.total = function () {

		var total = 0;

		angular.forEach ($scope.usuariosC, function (s) {
			if (s.active) {
				total += s.price;
			}
		});

		return total;
	};
	$scope.debito = function () {

		var total = 1170;

		angular.forEach ($scope.usuariosC, function (s) {
			if (s.active) {
				total -= s.price;
			}
		});

		return total;
	};
	$scope.usuarios = function () {

		var total = 0;

		angular.forEach ($scope.usuariosC, function (s) {
			if (s.active) {
				total += 1;
			}
		});

		return total;
	};

}