import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

describe('AppComponent', () => {
	let spectator: Spectator<AppComponent>;
	let component: AppComponent;

	const createComponent = createComponentFactory(AppComponent);

	beforeEach(() => {
		spectator = createComponent();
		component = spectator.component;
	});

	it('should create AppComponent successfully', () => {
		expect(component).toBeDefined();
	});
});
