var app = angular.module('vsCompensation', []);

    app.controller('computeController', function($scope) {
        var vm = this;
        vm.compensation = {
            "annualCompensation": {
                "description": "ctc",
                "monthly": 0,
                _annualValue: 0,
                get annual() {
                    return this._annualValue;
                },
                set annual(value) {
                    this._annualValue = parseInt(value);
                },
                get projected() {
                    return this.annual;
                },
                hide: true,
                messageInfo: ""
            },
            "basicSalary": {
                "description": "Basic Salary",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - vm.compensation.annualIncentive.annual) * 40 / 100;
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "hra": {
                "description": "House Rent Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.basicSalary.annual) * 50 / 100;
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "conveyanceAllowance": {
                "description": "Conveyance Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.fuelAllowance.annual > 0 ? 0 : (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) > 19200 ? 19200 : vm.compensation.basicSalary.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual)));
                },
                get projected() {
                    return (vm.compensation.fuelAllowance.projected > 0 ? 0 : (vm.compensation.totalAnnualCompensation.projected - (vm.compensation.gratuity.projected + vm.compensation.employerPf.projected + vm.compensation.annualIncentive.projected) - (vm.compensation.basicSalary.projected + vm.compensation.hra.projected) > 19200 ? 19200 : vm.compensation.basicSalary.projected - (vm.compensation.gratuity.projected + vm.compensation.employerPf.projected + vm.compensation.annualIncentive.projected) - (vm.compensation.basicSalary.projected + vm.compensation.hra.projected)));
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "specialAllowance": {
                "description": "Special Allowance",
                "monthly": 0,
                get annual() {
                    return vm.compensation.totalAnnualCompensation.annual -
                        (vm.compensation.gratuity.annual +
                            vm.compensation.employerPf.annual +
                            vm.compensation.annualIncentive.annual
                        ) - (vm.compensation.basicSalary.annual +
                            vm.compensation.hra.annual +
                            vm.compensation.conveyanceAllowance.annual
                        ) - (vm.compensation.medicalReimbursement.annual +
                            vm.compensation.fuelAllowance.annual +
                            vm.compensation.lta.annual +
                            vm.compensation.mealAllowance.annual +
                            vm.compensation.telephoneReimbursement.annual +
                            vm.compensation.giftAllowance.annual +
                            vm.compensation.academicAllowance.annual +
                            vm.compensation.nps.annual +
                            vm.compensation.carLeaseAllowance.annual
                        );
                },
                get projected() {
                    return vm.compensation.totalAnnualCompensation.annual -
                        (vm.compensation.gratuity.annual +
                            vm.compensation.employerPf.annual +
                            vm.compensation.annualIncentive.annual
                        ) - (vm.compensation.basicSalary.annual +
                            vm.compensation.hra.annual +
                            vm.compensation.conveyanceAllowance.annual
                        ) - (vm.compensation.medicalReimbursement.annual +
                            vm.compensation.fuelAllowance.annual +
                            vm.compensation.lta.projected +
                            vm.compensation.mealAllowance.projected +
                            vm.compensation.telephoneReimbursement.projected +
                            vm.compensation.giftAllowance.projected +
                            vm.compensation.academicAllowance.projected +
                            vm.compensation.nps.projected +
                            vm.compensation.carLeaseAllowance.projected
                        );
                },
                "canOpt": false,
                hide: false,
                messageInfo: "This value is automatically calculated"
            },
            "medicalReimbursement": {
                "description": "Medical Reimbursement",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) > 15000 ? 15000 : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual +
                        vm.compensation.employerPf.annual +
                        vm.compensation.annualIncentive.annual
                    ) - (vm.compensation.basicSalary.annual +
                        vm.compensation.hra.annual));
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "fuelAllowance": {
                "description": "Fuel Allowance",
                "monthly": 0,
                get annual() {
                    return ((vm.compensation.basicSalary.annual * 7.5 / 100) <= 19200 ?
                        0 : (vm.compensation.totalAnnualCompensation.annual -
                            (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                vm.compensation.annualIncentive.annual) -
                            (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                            (vm.compensation.medicalReimbursement.annual) < 19200) ?
                        (vm.compensation.totalAnnualCompensation.annual -
                            (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                vm.compensation.annualIncentive.annual) -
                            (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                            (vm.compensation.medicalReimbursement.annual)) :
                        ((vm.compensation.basicSalary.annual * 7.5 / 100) > 144000) ? ((vm.compensation.totalAnnualCompensation.annual -
                            (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                vm.compensation.annualIncentive.annual) -
                            (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                            (vm.compensation.medicalReimbursement.annual) > 144000) ? 144000 : (vm.compensation.totalAnnualCompensation.annual -
                            (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                vm.compensation.annualIncentive.annual) -
                            (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                            (vm.compensation.medicalReimbursement.annual))) : ((vm.compensation.totalAnnualCompensation.annual -
                                (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                    vm.compensation.annualIncentive.annual) -
                                (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                                (vm.compensation.medicalReimbursement.annual) >
                                vm.compensation.basicSalary.annual * 7.5 / 100) ?
                            (vm.compensation.basicSalary.annual * 7.5 / 100) : (vm.compensation.totalAnnualCompensation.annual -
                                (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual +
                                    vm.compensation.annualIncentive.annual) -
                                (vm.compensation.basicSalary.annual + vm.compensation.hra.annual) -
                                (vm.compensation.medicalReimbursement.annual))));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return (vm.compensation.fuelAllowance.annual <= 0 ? "" : (this.opted ?
                        "Your cash take home pay will decrease (Est: Rs." + Math.round(vm.compensation.fuelAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month) but you will get Rs." + Math.round(vm.compensation.fuelAllowance.annual / 12) + " per month in a petrol card and you will pay less taxes (Est: Rs." + Math.round(vm.compensation.fuelAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)" : "Your cash take home pay will increase (Est: Rs." + Math.round(vm.compensation.fuelAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month), but you will pay more taxes (Est: Rs." + Math.round(vm.compensation.fuelAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)"));
                }
            },
            "lta": {
                "description": "Leave Travel Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual) > (8.33 / 100) * vm.compensation.basicSalary.annual ? (8.33 / 100) * vm.compensation.basicSalary.annual : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return "LTA can help you pay less taxes (Up to Rs." + Math.round(vm.compensation.lta.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year), if you are eligible for it and if you have travel proof, receipts and digital payment proof ";
                }
            },
            "mealAllowance": {
                "description": "Meal Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual) > 2200 * 12 ? 2200 * 12 : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return this.opted ? "Your cash take home pay will decrease (Est: Rs." + Math.round(vm.compensation.mealAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month) but you will get Rs." + Math.round(vm.compensation.mealAllowance.annual / 12) + " per month in a food card and you will pay less taxes (Est: Rs." + Math.round(vm.compensation.mealAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)" : "Your cash take home pay will increase (Est: Rs." + Math.round(vm.compensation.mealAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month), but you will pay more taxes (Est: Rs." + Math.round(vm.compensation.mealAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)";
                }
            },
            "telephoneReimbursement": {
                "description": "Telephone Reimbursement",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual) > 3000 * 12 ? 3000 * 12 : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return "Telephone reimbursement can help you pay less taxes (Up to Rs." + Math.round(vm.compensation.telephoneReimbursement.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year), if you have receipts";
                }
            },
            "giftAllowance": {
                "description": "Gift Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual) > 5000 ? 5000 : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return this.opted ? "Your cash take home pay will decrease (Est: Rs." + Math.round(vm.compensation.giftAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month) but you will get Rs." + Math.round(vm.compensation.giftAllowance.annual) + " in a gift card at the end of the year, and you will pay less taxes(Est: Rs." + Math.round(vm.compensation.giftAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)" : "Your cash take home pay will increase (Est: Rs." + Math.round(vm.compensation.giftAllowance.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month), but you will pay more taxes (Est: Rs." + Math.round(vm.compensation.giftAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)";
                }
            },
            "academicAllowance": {
                "description": "Academic Allowance",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual + vm.compensation.giftAllowance.annual) > 50000 ? 50000 : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual + vm.compensation.giftAllowance.annual));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return "Academic allowance can help you pay less taxes (Up to Rs." + Math.round(vm.compensation.academicAllowance.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year), if you are eligible and if you have receipts and digital payment proof ";
                }
            },
            "nps": {
                "description": "NPS",
                "monthly": 0,
                get annual() {
                    return parseInt((vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual + vm.compensation.giftAllowance.annual + vm.compensation.academicAllowance.annual) > 10 / 100 * vm.compensation.basicSalary.annual ? 10 / 100 * vm.compensation.basicSalary.annual : vm.compensation.totalAnnualCompensation.annual - (vm.compensation.gratuity.annual + vm.compensation.employerPf.annual + vm.compensation.annualIncentive.annual) - (vm.compensation.basicSalary.annual + vm.compensation.hra.annual + vm.compensation.conveyanceAllowance.annual) - (vm.compensation.medicalReimbursement.annual + vm.compensation.fuelAllowance.annual + vm.compensation.lta.annual + vm.compensation.mealAllowance.annual + vm.compensation.telephoneReimbursement.annual + vm.compensation.giftAllowance.annual + vm.compensation.academicAllowance.annual)).toFixed(2));
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": true,
                "opted": true,
                hide: false,
                get messageInfo() {
                    return (this.opted ? "Your cash take home pay will decrease (Est: Rs." + Math.round(vm.compensation.nps.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month) but you will save more for retirement (Est: Rs." + vm.compensation.nps.annual + " more per year) you will pay less taxes (Est: Rs." + Math.round(vm.compensation.nps.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)" : "Your cash take home pay will increase (Est: Rs." + Math.round(vm.compensation.nps.annual * (1 - vm.compensation.expectedMarginalTaxRate.projected) / 12) + " per month) but you will save less for retirement (Est: Rs." + vm.compensation.nps.annual + " less per year), but you will pay more taxes (Est: Rs." + Math.round(vm.compensation.nps.annual * vm.compensation.expectedMarginalTaxRate.projected) + " per year)");
                }
            },
            "carLeaseAllowance": {
                "description": "Car Lease Allwance",
                "monthly": 0,
                get annual() {
                    return 0;
                },
                get projected() {
                    return (this.opted && this.annual > 0) ? this.annual : 0;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "gratuity": {
                "description": "Gratuity",
                "monthly": 0,
                get annual() {
                    return vm.compensation.basicSalary.annual / 26 * 15 / 12;
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "employerPf": {
                "description": "Employer Contribution to Provident Fund",
                "monthly": 0,
                get annual() {
                    return vm.compensation.basicSalary.annual * 0.12;
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "annualIncentive": {
                "description": "Annual Incentive",
                "monthly": 0,
                _annualValue: 0,
                get annual() {
                    return this._annualValue;
                },
                set annual(value) {
                    this._annualValue = parseInt(value);
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "totalAnnualCompensation": {
                "description": "Total Annual Compensation",
                "monthly": 0,
                _annualValue: 0,
                get annual() {
                    return this._annualValue;
                },
                set annual(value) {
                    this._annualValue = parseInt(value);
                },
                get projected() {
                    return this.annual;
                },
                "canOpt": false,
                hide: false,
                messageInfo: ""
            },
            "taxableComponentsPerAnnum": {
                "description": "Taxable Components Per Annum",
                "monthly": 0,
                get annual() {
                    return vm.compensation.basicSalary.annual + vm.compensation.specialAllowance.annual + vm.compensation.annualIncentive.annual;
                },
                get projected() {
                    return vm.compensation.basicSalary.projected + vm.compensation.specialAllowance.projected + vm.compensation.annualIncentive.projected;
                },
                "canOpt": false,
                hide: true
            },
            "expectedMarginalTaxRate": {
                "description": "Expected Marginal Tax",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.taxableComponentsPerAnnum.annual < 250000 ? 0 : ((vm.compensation.taxableComponentsPerAnnum.annual <= 500000 ? (10 / 100) : (vm.compensation.taxableComponentsPerAnnum.annual <= 1000000 ? (20 / 100) : (30 / 100)))));
                },
                get projected() {
                    return (vm.compensation.taxableComponentsPerAnnum.projected < 250000 ? 0 : (vm.compensation.taxableComponentsPerAnnum.projected <= 500000 ? (10 / 100) : (vm.compensation.taxableComponentsPerAnnum.projected <= 1000000 ? (20 / 100) : (30 / 100))));
                },
                "canOpt": false,
                hide: true
            },
            "expectedTaxPerAnnum": {
                "description": "Expected Tax Per Annum (Assuming bills have been submitted for all alowances)",
                "monthly": 0,
                get annual() {
                    return (vm.compensation.taxableComponentsPerAnnum.annual < 250000 ? 0 : (vm.compensation.taxableComponentsPerAnnum.annual <= 500000 ? (vm.compensation.taxableComponentsPerAnnum.annual - 250000) * 10 / 100 : (vm.compensation.taxableComponentsPerAnnum.annual <= 1000000 ? (vm.compensation.taxableComponentsPerAnnum.annual - 500000) * 20 / 100 + 12500 : (vm.compensation.taxableComponentsPerAnnum.annual - 1000000) * 30 / 100 + 112500)));
                },
                get projected() {
                    return (vm.compensation.taxableComponentsPerAnnum.projected < 250000 ? 0 : (vm.compensation.taxableComponentsPerAnnum.projected <= 500000 ? (vm.compensation.taxableComponentsPerAnnum.projected - 250000) * 10 / 100 : (vm.compensation.taxableComponentsPerAnnum.projected <= 1000000 ? (vm.compensation.taxableComponentsPerAnnum.projected - 500000) * 20 / 100 + 12500 : (vm.compensation.taxableComponentsPerAnnum.projected - 1000000) * 30 / 100 + 112500)));
                },
                "canOpt": false,
                hide: true
            },
            // "expectedTakeHomePerMonth": {
            //     "description": "Expected Take Home Per Month (Assuming bills have been submitted for all alowances. If not, Jan - March take home will reduce due to additional tax withholding)",
            //     "monthly": 0,
            //     get annual() {
            //         return (vm.compensation.basicSalary.annual / 12 + vm.compensation.hra.annual / 12 + vm.compensation.conveyanceAllowance.annual / 12 + vm.compensation.specialAllowance.annual / 12 + (vm.compensation.medicalReimbursement.annual + vm.compensation.lta.annual + vm.compensation.telephoneReimbursement.annual + vm.compensation.giftAllowance.annual + vm.compensation.academicAllowance.annual) / 12 - (vm.compensation.expectedMarginalTaxRate.annual / 12) - vm.compensation.employerPf.annual / 12);
            //     },
            //     get projected() {
            //         return (vm.compensation.basicSalary.projected / 12 + vm.compensation.hra.projected / 12 + vm.compensation.conveyanceAllowance.projected / 12 + vm.compensation.specialAllowance.projected / 12 + (vm.compensation.medicalReimbursement.projected + vm.compensation.lta.projected + vm.compensation.telephoneReimbursement.projected + vm.compensation.giftAllowance.projected + vm.compensation.academicAllowance.projected) / 12 - (vm.compensation.expectedMarginalTaxRate.projected / 12) - vm.compensation.employerPf.projected / 12);
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "cashEquivalent": {
            //     "description": "Expected Take Home Per Month (Assuming bills have been submitted for all alowances. If not, Jan - March take home will reduce due to additional tax withholding)",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.fuelAllowance.annual / 12 + vm.compensation.mealAllowance.annual / 12;
            //     },
            //     get projected() {
            //         return vm.compensation.fuelAllowance.projected / 12 + vm.compensation.mealAllowance.projected / 12;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "monthlyTotal": {
            //     "description": "Monthly Total",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.expectedTakeHomePerMonth.annual + vm.compensation.cashEquivalent.annual;
            //     },
            //     get projected() {
            //         return vm.compensation.expectedTakeHomePerMonth.projected + vm.compensation.cashEquivalent.projected;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "PF": {
            //     "description": "Provident Fund(Employer & Employee contribution per year)",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.employerPf.annual * 2;
            //     },
            //     get projected() {
            //         return vm.compensation.employerPf.projected * 2;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "gratuityPerYear": {
            //     "description": "Gratuity per year",
            //     "monthly": 0,
            //     get annual() {
            //         return 0; //return vm.compensation.gratuity.annual;
            //     },
            //     get projected() {
            //         return 0; //vm.compensation.gratuity.projected;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "npsPerYear": {
            //     "description": "NPS per year",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.nps.annual;
            //     },
            //     get projected() {
            //         return vm.compensation.nps.projected;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "annualIncentivePerYear": {
            //     "description": "Annual Incentive",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.annualIncentive.annual;
            //     },
            //     get projected() {
            //         return vm.compensation.annualIncentive.projected;
            //     },
            //     "canOpt": false,
            //     hide: true
            // },
            // "grandTotal": {
            //     "description": "Grand Total",
            //     "monthly": 0,
            //     get annual() {
            //         return vm.compensation.expectedMarginalTaxRate.annual + (vm.compensation.monthlyTotal.annual * 12) + vm.compensation.PF.annual + vm.compensation.gratuityPerYear.annual + vm.compensation.npsPerYear.annual + vm.compensation.annualIncentivePerYear.annual;
            //     },
            //     get projected() {
            //         return vm.compensation.expectedMarginalTaxRate.projected + (vm.compensation.monthlyTotal.projected * 12) + vm.compensation.PF.projected + vm.compensation.gratuityPerYear.projected + vm.compensation.npsPerYear.projected + vm.compensation.annualIncentivePerYear.projected;
            //     },
            //     "canOpt": false,
            //     hide: true
            // }
        };



    });
