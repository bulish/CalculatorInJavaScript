function Calculator () {

	/****************** CALCULATOR ********************/

	var body = document.body;

	var title = document.createElement('div');
	title.innerHTML = 'My Calculator';
	body.appendChild(title);

	var container = document.createElement('div');
	body.appendChild(container);

	var display = document.createElement('div');
	container.appendChild(display);

	var numberDisplay = document.createElement('div');
	numberDisplay.innerHTML = '0';
	display.appendChild(numberDisplay);

	var reset = document.createElement('div');
	reset.innerHTML = 'RESET';
	body.appendChild(reset);

	/****************** NUMBERS  AND OPERATORS ********************/

	var numbersArray = [];
	for (let i = 0; i < 16; i++) {
		myDiv = document.createElement('div');
		numbersArray.push(myDiv);
		container.appendChild(myDiv);
	}

	var seven = document.createElement('div');
	seven.innerHTML = '7';
	numbersArray[0].appendChild(seven);
	seven.classList = 'grey';

	var eight = document.createElement('div');
	eight.innerHTML = '8';
	numbersArray[1].appendChild(eight);
	eight.classList = 'grey';

	var nine = document.createElement('div');
	nine.innerHTML = '9';
	numbersArray[2].appendChild(nine);
	nine.classList = 'grey';

	var dividedBy = document.createElement('div');
	dividedBy.innerHTML = '/';
	numbersArray[3].appendChild(dividedBy);
	dividedBy.classList = 'pink';

	var four = document.createElement('div');
	four.innerHTML = '4';
	numbersArray[4].appendChild(four);
	four.classList = 'grey';

	var five = document.createElement('div');
	five.innerHTML = '5';
	numbersArray[5].appendChild(five);
	five.classList = 'grey';

	var six = document.createElement('div');
	six.innerHTML = '6';
	numbersArray[6].appendChild(six);
	six.classList = 'grey';

	var times = document.createElement('div');
	times.innerHTML = '*';
	numbersArray[7].appendChild(times);
	times.classList = 'pink';

	var one = document.createElement('div');
	one.innerHTML = '1';
	numbersArray[8].appendChild(one);
	one.classList = 'grey';

	var two = document.createElement('div');
	two.innerHTML = '2';
	numbersArray[9].appendChild(two);
	two.classList = 'grey';

	var three = document.createElement('div');
	three.innerHTML = '3';
	numbersArray[10].appendChild(three);
	three.classList = 'grey';

	var minus = document.createElement('div');
	minus.innerHTML = '-';
	numbersArray[11].appendChild(minus);
	minus.classList = 'pink';

	var zero = document.createElement('div');
	zero.innerHTML = '0';
	numbersArray[12].appendChild(zero);
	zero.classList = 'grey';

	var dot = document.createElement('div');
	dot.innerHTML = '.';
	numbersArray[13].appendChild(dot);
	dot.classList = 'grey';

	var plus = document.createElement('div');
	plus.innerHTML = '+';
	numbersArray[14].appendChild(plus);
	plus.classList = 'pink';

	var equals = document.createElement('div');
	equals.innerHTML = '=';
	numbersArray[15].appendChild(equals);
	equals.classList = 'purple';

	/*********************** STYLES *************************/

	////// body //////

	style1 = body.style;

	style1.overflow = 'hidden';
	style1.margin = 0;
	style1.padding = 0;
	style1.width = '100vw';
	style1.height = '100vh';
	style1.position = 'relative';
	style1.background = '#FDF7FF';

	////// title //////

	style2 = title.style;

	style2.fontSize = '3rem';
	style2.textAlign = 'center';
	style2.paddingTop = '2rem';
	style2.color = '#4A4453';
	style2.fontFamily = "'PT Sans', sans-serif";

	////// container //////

	style3 = container.style;

	style3.position = 'absolute';
	style3.top = '50%';
	style3.left = '50%';
	style3.transform = 'translate(-50%, -50%)';
	style3.border = '1px solid #4A4453';
	style3.width = '50vw';
	style3.fontSize = '1.5rem';
	style3.background = 'white';
	style3.textAlign = 'center';
	style3.padding = '1rem';

	////// display //////

	style4 = display.style;
	style4.padding = '1rem';

	style5 = numberDisplay.style;
	style5.border = '1px solid #946E91';
	style5.textAlign = 'right';
	style5.paddingRight = '0.5rem';

	////// numbers and operators //////

	for (let i = 0; i < numbersArray.length; i++) {
		style6 = numbersArray[i].style;
		style6.display = 'inline-block';
		style6.width = '22%';
		style6.padding = '0.5rem';
		style6.textAlign = 'center';
	}

	var greyClass = document.querySelectorAll('.grey');

	for (let i = 0; i < greyClass.length; i++) {
		style7 = greyClass[i].style;
		style7.background = '#979DB0';
		style7.padding = '0.5rem';

		greyClass[i].addEventListener('mouseenter', function () {
			greyClass[i].style.background = '#7990A3';
		});

		greyClass[i].addEventListener('mouseleave', function () {
			greyClass[i].style.background = '#979DB0';
		});
	}

	var pinkClass = document.querySelectorAll('.pink');

	for (let i = 0; i < pinkClass.length; i++) {
		style8 = pinkClass[i].style;
		style8.background = '#D6B1C9';
		style8.padding = '0.5rem';

		pinkClass[i].addEventListener('mouseenter', function () {
			pinkClass[i].style.background = '#B9A6B2';
		});

		pinkClass[i].addEventListener('mouseleave', function () {
			pinkClass[i].style.background = '#D6B1C9';
		});
	}

	var purpleClass = document.querySelector('.purple');
	style9 = purpleClass.style;
	style9.background = '#9A8FAD';
	style9.padding = '0.5rem';

	purpleClass.addEventListener('mouseenter', function () {
		purpleClass.style.background = '#8578A4';
	});

	purpleClass.addEventListener('mouseleave', function () {
		purpleClass.style.background = '#9A8FAD';
	});

	style10 = reset.style;
	style10.position = 'absolute';
	style10.bottom = '10rem';
	style10.width = '100vw';
	style10.textAlign = 'center';
	style10.fontSize = '1.5rem';
	style10.color = '#4A4453';
	style10.fontFamily = "'PT Sans', sans-serif";

	reset.addEventListener('mouseenter', function () {
		style10.fontSize = '2rem';
		style10.cursor = 'pointer';
	});

	reset.addEventListener('mouseleave', function () {
		style10.fontSize = '1.5rem';
	});

	/************************ CLICKING **************************/

	var numberOfCount = 0;
	var fromBeginning = false;
	numberOnDisplay = numberDisplay.innerHTML;

	zero.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '0';
			} else {
				numberOnDisplay = '0';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '0';
		}
	});

	one.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '1';
			} else {
				numberOnDisplay = '1';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '1';
		}
	});

	two.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '2';
			} else {
				numberOnDisplay = '2';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '2';
		}
	});

	three.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '3';
			} else {
				numberOnDisplay = '3';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '3';
		}
	});

	four.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '4';
			} else {
				numberOnDisplay = '4';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '4';
		}
	});

	five.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '5';
			} else {
				numberOnDisplay = '5';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '5';
		}
	});

	six.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '6';
			} else {
				numberOnDisplay = '6';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '6';
		}
	});

	seven.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '7';
			} else {
				numberOnDisplay = '7';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '7';
		}
	});

	eight.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '8';
			} else {
				numberOnDisplay = '8';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '8';
		}
	});

	nine.addEventListener('click', function () {
		if (numberOfCount == 0) {
			if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '9';
			} else {
				numberOnDisplay = '9';
				numberDisplay.innerHTML = numberOnDisplay;
				fromBeginning = false;
			}
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '9';
		}
	});

	minus.addEventListener('click', function () {
		if (
			numberDisplay.innerHTML.indexOf('+') == -1 &&
			numberDisplay.innerHTML.indexOf('-') == -1 &&
			numberDisplay.innerHTML.indexOf('*') == -1 &&
			numberDisplay.innerHTML.indexOf('/') == -1 &&
			fromBeginning == false
		) {
			if (numberDisplay.innerHTML != '0') {
				if (
					numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
				) {
					numberOnDisplay = numberOnDisplay;
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
				}
			} else {
				numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
			}
		} else if (fromBeginning == true) {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
			fromBeginning = 'false';
		} else {
			count();
			numberOfCount++;
			next = '-';
			numberDisplay.innerHTML = numberDisplay.innerHTML + next;
		}
	});

	plus.addEventListener('click', function () {
		if (
			numberDisplay.innerHTML.indexOf('+') == -1 &&
			numberDisplay.innerHTML.indexOf('-') == -1 &&
			numberDisplay.innerHTML.indexOf('*') == -1 &&
			numberDisplay.innerHTML.indexOf('/') == -1 &&
			fromBeginning == false
		) {
			if (numberDisplay.innerHTML != '0') {
				if (
					numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
				) {
					numberOnDisplay = numberOnDisplay;
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '+';
				}
			} else {
				numberDisplay.innerHTML = numberDisplay.innerHTML;
			}
		} else if (fromBeginning == true) {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '+';
			fromBeginning = 'false';
		} else {
			count();
			numberOfCount++;
			next = '+';
			numberDisplay.innerHTML = numberDisplay.innerHTML + next;
		}
	});

	times.addEventListener('click', function () {
		if (
			numberDisplay.innerHTML.indexOf('+') == -1 &&
			numberDisplay.innerHTML.indexOf('-') == -1 &&
			numberDisplay.innerHTML.indexOf('*') == -1 &&
			numberDisplay.innerHTML.indexOf('/') == -1 &&
			fromBeginning == false
		) {
			if (numberDisplay.innerHTML != '0') {
				if (
					numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
				) {
					numberOnDisplay = numberOnDisplay;
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '*';
				}
			} else {
				numberDisplay.innerHTML = numberDisplay.innerHTML;
			}
		} else if (fromBeginning == true) {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '*';
			fromBeginning = 'false';
		} else {
			count();
			numberOfCount++;
			next = '*';
			numberDisplay.innerHTML = numberDisplay.innerHTML + next;
		}
	});

	dividedBy.addEventListener('click', function () {
		if (
			numberDisplay.innerHTML.indexOf('+') == -1 &&
			numberDisplay.innerHTML.indexOf('-') == -1 &&
			numberDisplay.innerHTML.indexOf('*') == -1 &&
			numberDisplay.innerHTML.indexOf('/') == -1 &&
			fromBeginning == false
		) {
			if (numberDisplay.innerHTML != '0') {
				if (
					numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
					numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
				) {
					numberOnDisplay = numberOnDisplay;
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '/';
				}
			} else {
				numberDisplay.innerHTML = numberDisplay.innerHTML;
			}
		} else if (fromBeginning == true) {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '/';
			fromBeginning = 'false';
		} else {
			count();
			numberOfCount++;
			next = '/';
			numberDisplay.innerHTML = numberDisplay.innerHTML + next;
		}
	});

	dot.addEventListener('click', function () {
		if (
			numberDisplay.innerHTML.lastIndexOf('+') >
				numberDisplay.innerHTML.lastIndexOf('.') ||
			numberDisplay.innerHTML.lastIndexOf('-') >
				numberDisplay.innerHTML.lastIndexOf('.') ||
			numberDisplay.innerHTML.lastIndexOf('*') >
				numberDisplay.innerHTML.lastIndexOf('.') ||
			numberDisplay.innerHTML.lastIndexOf('/') >
				numberDisplay.innerHTML.lastIndexOf('.') ||
			numberDisplay.innerHTML.indexOf('.') == -1
		) {
			numberDisplay.innerHTML = numberDisplay.innerHTML + '.';
		} else {
			numberDisplay.innerHTML = numberDisplay.innerHTML;
		}	 
	});

	equals.addEventListener('click', function () {
		if (
			(numberDisplay.innerHTML.indexOf('+') != -1 ||
				numberDisplay.innerHTML.indexOf('-') != -1 ||
				numberDisplay.innerHTML.indexOf('*') != -1 ||
				numberDisplay.innerHTML.indexOf('/') != -1) &&
			numberDisplay.innerHTML.lastIndexOf('+') !=
				eval(numberDisplay.innerHTML.length - 1) &&
			numberDisplay.innerHTML.lastIndexOf('-') !=
				eval(numberDisplay.innerHTML.length - 1) &&
			numberDisplay.innerHTML.lastIndexOf('*') !=
				eval(numberDisplay.innerHTML.length - 1) &&
			numberDisplay.innerHTML.lastIndexOf('/') !=
				eval(numberDisplay.innerHTML.length - 1)
		) {
			count();
			numberOfCount = 0;
			fromBeginning = true;
		}
	});

	/*********************** KEYBOARD *************************/

	var next;
	document.addEventListener('keydown', function (e) {
		var x = e.keyCode;
		switch (x) {
			case 96:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '0';
					} else {
						numberOnDisplay = '0';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '0';
				}
				break;
			case 97:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '1';
					} else {
						numberOnDisplay = '1';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '1';
				}
				break;
			case 98:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '2';
					} else {
						numberOnDisplay = '2';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '2';
				}
				break;
			case 99:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '3';
					} else {
						numberOnDisplay = '3';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '3';
				}
				break;
			case 100:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '4';
					} else {
						numberOnDisplay = '4';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '4';
				}
				break;
			case 101:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '5';
					} else {
						numberOnDisplay = '5';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '5';
				}
				break;
			case 102:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '6';
					} else {
						numberOnDisplay = '6';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '6';
				}
				break;
			case 103:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '7';
					} else {
						numberOnDisplay = '7';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '7';
				}
				break;
			case 104:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '8';
					} else {
						numberOnDisplay = '8';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '8';
				}
				break;
			case 105:
				if (numberOfCount == 0) {
					if (numberDisplay.innerHTML != '0' && fromBeginning != true) {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '9';
					} else {
						numberOnDisplay = '9';
						numberDisplay.innerHTML = numberOnDisplay;
						fromBeginning = false;
					}
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '9';
				}
				break;
			case 106:
				if (
					numberDisplay.innerHTML.indexOf('+') == -1 &&
					numberDisplay.innerHTML.indexOf('-') == -1 &&
					numberDisplay.innerHTML.indexOf('*') == -1 &&
					numberDisplay.innerHTML.indexOf('/') == -1 &&
					fromBeginning == false
				) {
					if (numberDisplay.innerHTML != '0') {
						if (
							numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
						) {
							numberOnDisplay = numberOnDisplay;
						} else {
							numberDisplay.innerHTML = numberDisplay.innerHTML + '*';
						}
					} else {
						numberDisplay.innerHTML = numberDisplay.innerHTML;
					}
				} else if (fromBeginning == true) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '*';
					fromBeginning = 'false';
				} else {
					count();
					numberOfCount++;
					next = '*';
					numberDisplay.innerHTML = numberDisplay.innerHTML + next;
				}
				break;
			case 107:
				if (
					numberDisplay.innerHTML.indexOf('+') == -1 &&
					numberDisplay.innerHTML.indexOf('-') == -1 &&
					numberDisplay.innerHTML.indexOf('*') == -1 &&
					numberDisplay.innerHTML.indexOf('/') == -1 &&
					fromBeginning == false
				) {
					if (numberDisplay.innerHTML != '0') {
						if (
							numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
						) {
							numberOnDisplay = numberOnDisplay;
						} else {
							numberDisplay.innerHTML = numberDisplay.innerHTML + '+';
						}
					} else {
						numberDisplay.innerHTML = numberDisplay.innerHTML;
					}
				} else if (fromBeginning == true) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '+';
					fromBeginning = 'false';
				} else {
					count();
					numberOfCount++;
					next = '+';
					numberDisplay.innerHTML = numberDisplay.innerHTML + next;
				}
				break;
			case 109:
				if (
					numberDisplay.innerHTML.indexOf('+') == -1 &&
					numberDisplay.innerHTML.indexOf('-') == -1 &&
					numberDisplay.innerHTML.indexOf('*') == -1 &&
					numberDisplay.innerHTML.indexOf('/') == -1 &&
					fromBeginning == false
				) {
					if (numberDisplay.innerHTML != '0') {
						if (
							numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
						) {
							numberOnDisplay = numberOnDisplay;
						} else {
							numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
						}
					} else {
						numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
					}
				} else if (fromBeginning == true) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '-';
					fromBeginning = 'false';
				} else {
					count();
					numberOfCount++;
					next = '-';
					numberDisplay.innerHTML = numberDisplay.innerHTML + next;
				}
				break;
			case 110:
				if (
					numberDisplay.innerHTML.lastIndexOf('+') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('-') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('*') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('/') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.indexOf('.') == -1
				) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '.';
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML;
				}
				break;
			case 190:
				if (
					numberDisplay.innerHTML.lastIndexOf('+') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('-') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('*') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.lastIndexOf('/') >
						numberDisplay.innerHTML.lastIndexOf('.') ||
					numberDisplay.innerHTML.indexOf('.') == -1
				) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '.';
				} else {
					numberDisplay.innerHTML = numberDisplay.innerHTML;
				}
				break;
			case 111:
				if (
					numberDisplay.innerHTML.indexOf('+') == -1 &&
					numberDisplay.innerHTML.indexOf('-') == -1 &&
					numberDisplay.innerHTML.indexOf('*') == -1 &&
					numberDisplay.innerHTML.indexOf('/') == -1 &&
					fromBeginning == false
				) {
					if (numberDisplay.innerHTML != '0') {
						if (
							numberOnDisplay.lastIndexOf('+') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('-') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('*') == numberOnDisplay.length - 1 ||
							numberOnDisplay.lastIndexOf('/') == numberOnDisplay.length - 1
						) {
							numberOnDisplay = numberOnDisplay;
						} else {
							numberDisplay.innerHTML = numberDisplay.innerHTML + '/';
						}
					} else {
						numberDisplay.innerHTML = numberDisplay.innerHTML;
					}
				} else if (fromBeginning == true) {
					numberDisplay.innerHTML = numberDisplay.innerHTML + '/';
					fromBeginning = 'false';
				} else {
					count();
					numberOfCount++;
					next = '/';
					numberDisplay.innerHTML = numberDisplay.innerHTML + next;
				}
				break;
			case 187:
				if (
					(numberDisplay.innerHTML.indexOf('+') != -1 ||
						numberDisplay.innerHTML.indexOf('-') != -1 ||
						numberDisplay.innerHTML.indexOf('*') != -1 ||
						numberDisplay.innerHTML.indexOf('/') != -1) &&
					numberDisplay.innerHTML.lastIndexOf('+') !=
						eval(numberDisplay.innerHTML.length - 1) &&
					numberDisplay.innerHTML.lastIndexOf('-') !=
						eval(numberDisplay.innerHTML.length - 1) &&
					numberDisplay.innerHTML.lastIndexOf('*') !=
						eval(numberDisplay.innerHTML.length - 1) &&
					numberDisplay.innerHTML.lastIndexOf('/') !=
						eval(numberDisplay.innerHTML.length - 1)
				) {
					count();
					numberOfCount = 0;
					fromBeginning = true;
				}
				break;
			default:
				break;
		}
	});

	/*********************** COUNTING *************************/

	function count() {
		var theNumber = numberDisplay.innerHTML;
		indexesOfOperators = [];
		theOperators = [];
		numbers = [];

		for (let i = 0; i < theNumber.length; i++) {
			if (
				theNumber[i] == '+' ||
				theNumber[i] == '-' ||
				theNumber[i] == '*' ||
				theNumber[i] == '/'
			) {
				indexesOfOperators.push(i);
				theOperators.push(theNumber[i]);
			}
		}

		indexesOfOperators.unshift('0');

		for (let i = 1; i < indexesOfOperators.length; i++) {
			numbers[0] = Number(
				theNumber.slice(indexesOfOperators[0], indexesOfOperators[1]),
			);
			numbers[i] = Number(
				theNumber.slice(indexesOfOperators[i] + 1, indexesOfOperators[i + 1]),
			);
		}

		var result;

		if (theOperators[0] == '+') {
			result = numbers[0] + numbers[1];
		} else if (theOperators[0] == '-') {
			result = numbers[0] - numbers[1];
		} else if (theOperators[0] == '*') {
			result = numbers[0] * numbers[1];
		} else {
			if (numbers[1] != 0) {
				result = numbers[0] / numbers[1];
			} else {
				result = 0;
			}
		}
		numbers = [];
		theOperators = [];
		indexesOfOperators = [];
		numbers[0] = result;
		theOperators[0] = next;
		numberDisplay.innerHTML = result;
	}

	/*********************** RESET *************************/

    reset.addEventListener("click", function () {
        numberDisplay.innerHTML = "0";
        numbers = [];
		theOperators = [];
		indexesOfOperators = [];
		numberOfCount = 0;
    })
}

window.addEventListener('load', Calculator);

// TODO:
// nejde napsat jako prvni cislo 0.5
// kdyz numberOfCount neni 0, blbne to