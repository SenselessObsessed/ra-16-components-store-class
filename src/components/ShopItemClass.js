import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ShopItemModel from '../models/ShopItemModel';

export class ShopItemClass extends Component {
	static propTypes = {
		user: PropTypes.instanceOf(ShopItemModel).isRequired,
	};

	render() {
		const { brand, title, description, descriptionFull, price, currency } =
			this.props.item;

		return (
			<div class='main-content'>
				<h2>{brand}</h2>
				<h1>{title}</h1>
				<h3>{description}</h3>
				<div class='description'>{descriptionFull}</div>
				<div class='highlight-window mobile'>
					<div class='highlight-overlay'></div>
				</div>
				<div class='divider'></div>
				<div class='purchase-info'>
					<div class='price'>
						{currency}
						{price.toFixed(2)}
					</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		);
	}
}

export default ShopItemClass;
