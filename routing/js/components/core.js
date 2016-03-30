import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Btn from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCoreGridSystem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
						</Text>

			        	<Card>
			        		<CardContent>
			        			<Block>
			        				<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 1. GRID SYSTEM</Text>
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										When it comes to organizing content, grids come in handy. Take a look at the examples below to pick the best system for your content.
									</Text>

									<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
										<Block classes={'brick brick-12 e-background-grey-300 e-h-center e-v-center custom-height'}>
											brick-12
										</Block>
									</Block>

									<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
										<Block classes={'brick brick-6 e-background-grey-300 e-h-end e-v-end custom-height'}>
											brick-6
										</Block>
										<Block classes={'brick brick-6 e-background-grey-300 e-h-start e-v-end custom-height'}>
											brick-6
										</Block>
									</Block>

									<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
										<Block classes={'brick brick-4 e-background-grey-300 e-h-start e-v-center custom-height'}>
											brick-4
										</Block>
										<Block classes={'brick brick-4 e-background-grey-300 e-h-center e-v-center custom-height'}>
											brick-4
										</Block>
										<Block classes={'brick brick-4 e-background-grey-300 e-h-end e-v-center custom-height'}>
											brick-4
										</Block>
									</Block>

									<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15 e-padding-bottom-15'}>
										<Block classes={'brick brick-3 e-background-grey-300 custom-height'}>
											brick-3
										</Block>
										<Block classes={'brick brick-3 e-background-grey-300 custom-height'}>
											brick-3
										</Block>
										<Block classes={'brick brick-3 e-background-grey-300 custom-height'}>
											brick-3
										</Block>
										<Block classes={'brick brick-3 e-background-grey-300 custom-height'}>
											brick-3
										</Block>
									</Block>

			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-core</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Create a new ReactJS file with the code bellow.
									</Text>

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											import &#123;Block&#125; from 'essence-core';
											<br />
											<br />
											&lt;Block classes=&#123;'e-row'&#125;&gt;
											<br />
												&lt;Block classes=&#123;'brick brick-12 e-h-center e-v-center'&#125;&gt;brick-12&lt;/Block&gt;
											<br />
											&lt;/Block&gt;
											<br />
											<br />
											&lt;Block classes=&#123;'e-row'&#125;&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-6 e-h-end e-v-end'&#125;&gt;brick-6&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-6 e-h-start e-v-end'&#125;&gt;brick-6&lt;/Block&gt;
											<br />
											&lt;/Block&gt;
											<br />
											<br />
											&lt;Block classes=&#123;'e-row'&#125;&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-4 e-h-start e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-4 e-h-center e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-4 e-h-end e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
											<br />
											&lt;/Block&gt;
											<br />
											<br />
											&lt;Block classes=&#123;'e-row'&#125;&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
											<br />
											&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
											<br />
											&lt;/Block&gt;
											<br />
											<br />
											... more bricks on the wall ...
					    				</code>
									</pre>
									<Text type={'h4'} classes={'e-text-indigo-400 e-padding-top-15 e-text-uppercase'}>Properties:</Text>
									<Divider classes={'thin short e-background-indigo-400 '} />
									<pre className={'e-text-black properties e-text-left'}>
										<code>
											<table>
												<thead className={'e-background-grey-100 '}>
													<tr>
													<th>Name</th>
													<th>Default</th>
													<th>Description</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>type</td>
														<td>div</td>
														<td>or from the list: span, header, footer, section, ul, li, hr, br</td>
													</tr>
													<tr>
														<td>e-h-start</td>
														<td>classes=&#123;'e-h-start'&#125;</td>
														<td>horizontal position: at the bigining of the row</td>
													</tr>
													<tr>
														<td>e-h-center</td>
														<td>classes=&#123;'e-h-center'&#125;</td>
														<td>horizontal position: at the middle of the row</td>
													</tr>
													<tr>
														<td>e-h-end</td>
														<td>classes=&#123;'e-h-end'&#125;</td>
														<td>horizontal position: at the end of the row</td>
													</tr>
													<tr>
														<td>e-v-start</td>
														<td>classes=&#123;'e-v-start'&#125;</td>
														<td>vertical position: at the top of the row</td>
													</tr>
													<tr>
														<td>e-v-center</td>
														<td>classes=&#123;'e-v-center'&#125;</td>
														<td>vertical position: at the middle of the row</td>
													</tr>
													<tr>
														<td>e-v-end</td>
														<td>classes=&#123;'e-v-end'&#125;</td>
														<td>vertical position: at the bottom of the row</td>
													</tr>
												</tbody>
											</table>
										</code>
									</pre>
			        			</Block>
			        		</CardContent>
			        	</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreDivider extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
        	<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
        		<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
						</Text>
			        	<Card>
			        		<CardContent>
								<Block>
									<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 2. DIVIDER</Text>
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										According to our needs we created some dividers and stored them in a .less file called, you've guest it, dividers.

										We've created three values for width and five values for height. You can combine them as you please.
									</Text>

									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thin & short
										<Divider classes={'thin short e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thin & medium
										<Divider classes={'thin medium e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thin & long
										<Divider classes={'thin long e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thin
										<Divider classes={'thin e-background-indigo-400'} />
									</Block>

									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thick & short
										<Divider classes={'thick short e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thick & medium
										<Divider classes={'thick medium e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thick & long
										<Divider classes={'thick long e-background-indigo-400'} />
									</Block>
									<Block className={'e-padding-top-15 e-text-blue-grey-700'}>
										Thick
										<Divider classes={'thick e-background-indigo-400'} />
									</Block>

									<br />
									<br />

									<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
									<Divider classes={'thin short e-background-indigo-400'} />

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											npm install <strong>essence-core</strong>
					    				</code>
									</pre>

									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Create a new ReactJS file with the code bellow.
									</Text>

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											import &#123;Divider&#125; from 'essence-core';
											<br />
											<br />
											&lt;Divider classes=&#123;'thin short e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thin medium e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thin long e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thin e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thick short e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thick medium e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thick long e-background-indigo-400'&#125; /&gt;
											<br />
											&lt;Divider classes=&#123;'thick e-background-indigo-400'&#125; /&gt;
											<br />
					    				</code>
									</pre>
									<Text type={'h4'} classes={'e-text-indigo-400 e-padding-top-15 e-text-uppercase'}>Properties:</Text>
									<Divider classes={'thin short e-background-indigo-400 '} />
									<pre className={'e-text-black properties e-text-left'}>
										<code>
											<table>
												<thead className={'e-background-grey-100 '}>
													<tr>
													<th>Name</th>
													<th>Default</th>
													<th>Description</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>thinnest</td>
														<td>classes=&#123;'thinnest'&#125;</td>
														<td>Divider thickness:1px</td>
													</tr>
													<tr>
														<td>thin</td>
														<td>classes=&#123;'thin'&#125;</td>
														<td>Divider thickness:2px</td>
													</tr>
													<tr>
														<td>regular</td>
														<td>classes=&#123;'regular'&#125;</td>
														<td>Divider thickness:3px</td>
													</tr>
													<tr>
														<td>thick</td>
														<td>classes=&#123;'thick'&#125;</td>
														<td>Divider thickness:5px</td>
													</tr>
													<tr>
														<td>thickest</td>
														<td>classes=&#123;'thickest'&#125;</td>
														<td>Divider thickness:7px</td>
													</tr>
													<tr>
														<td>short</td>
														<td>classes=&#123;'short'&#125;</td>
														<td>Divider widht:5%</td>
													</tr>
													<tr>
														<td>medium</td>
														<td>classes=&#123;'medium'&#125;</td>
														<td>Divider widht:25%</td>
													</tr>
													<tr>
														<td>long</td>
														<td>classes=&#123;'long'&#125;</td>
														<td>Divider widht: 50%</td>
													</tr>

												</tbody>
											</table>
										</code>
									</pre>
								</Block>
			        		</CardContent>
			        	</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreRippleInk extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
        	<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
        		<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
						</Text>

			        	<Card>
			        		<CardContent>
								<Block>
									<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 3. RIPPLE INK</Text>
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										This component is design for Btn component to simulate a color ripple effect on the background element.
									</Text>

									<Block className={'e-padding-top-50 e-text-center'}>
										<Btn
											label={'Ripple Effect'}
											ripple={true}
											type={'succes'}
											className={'raised e-background-indigo-600'} />
									</Block>

									<br />
									<br />

									<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
									<Divider classes={'thin short e-background-indigo-400'} />

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											npm install <strong>essence-core</strong>
					    				</code>
									</pre>

									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Include the RippleInk component inside an element container where style position must be 'relative'.
										<br />
										<br />
										- The RippleInk will generate a div with style position absolute and the Ripple Effect with the background color calculated from the element.
										<br />
										- The Ripple Effect position is calculated based on the click event position inside the parent.
									</Text>

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											import &#123;Utils, RippleInk&#125; from 'essence-core';
											<br />
											<br />
											let boundingClient = this.currentButton.getBoundingClientRect();
											<br />
											let color = Utils.BackgroundColor(event);
											<br />
											let position = Utils.ClickPosition(event, boundingClient);
											<br />
											<br />
											&lt;RippleInk color=&#123;color&#125; position=&#123;position&#125;/&gt;
					    				</code>
									</pre>
									<Text type={'h4'} classes={'e-text-indigo-400 e-padding-top-15 e-text-uppercase'}>Properties:</Text>
									<Divider classes={'thin short e-background-indigo-400 '} />
									<pre className={'e-text-black properties e-text-left'}>
										<code>
											<table>
												<thead className={'e-background-grey-100 '}>
													<tr>
													<th>Name</th>
													<th>Default</th>
													<th>Description</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>position</td>
														<td>&#123;x:0, y:0&#125;</td>
														<td>object with x for left position in px & y for top position in px</td>
													</tr>
													<tr>
														<td>color</td>
														<td>#FFFFFF</td>
														<td>for backgroundColor</td>
													</tr>
												</tbody>
											</table>
										</code>
									</pre>
								</Block>
							</CardContent>
			        	</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreTextTypography extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	textType: 'span',
			textPosition: 'e-text-center',
			textTypography: 'e-body1',
			active: {
				'type': null,
				'position': null,
				'typo': null
			},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

	changeType(type) {
		let active = this.state.active;
		active.type = type;

		this.setState({
			textType: type || 'span',
			active: active
		});
	}

	changePosition(position) {
		let active = this.state.active;
		active.position = position;

		this.setState({
			textPosition: position || 'e-text-center',
			active: active
		});
	}

	changeTypography(typography) {
		let active = this.state.active;
		active.typo = typography;

		this.setState({
			textTypography: typography || 'e-body1',
			active: active
		});
	}

	renderType() {
		let self = this;
		let typeList = [];
		let types = [
			'a', 'p', 'label', 'strong', 'small', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sup', 'sub', 'em'
		];


		[].forEach.call(types, function(type) {
			typeList.push(
				<Btn
					label={type}
					type={ (type === self.state.active.type) ? 'info' : 'succes' }
					ripple={false}
					className={ClassNames('flat', (type === self.state.active.type) ? 'e-background-indigo-600' : 'e-background-indigo-400')}
					key={'text-type-' + type}
					onClick={self.changeType.bind(self, type.toLowerCase())}/>
			);
		});

		return typeList;
	}

	renderPosition() {
		let self = this;
		let positionList = [];
		let positions = [
			'e-text-left', 'e-text-right', 'e-text-center', 'e-text-justify', 'e-text-uppercase', 'e-text-capitalize', 'e-text-lowercase'
		];

		[].forEach.call(positions, function(position) {
			positionList.push(
				<Btn
					label={position}
					type={ (position === self.state.active.position) ? 'info' : 'succes'}
					ripple={false}
					className={ClassNames('flat', (position === self.state.active.position) ? 'e-background-indigo-600' : 'e-background-indigo-400')}
					key={'text-position-' + position.toLowerCase()}
					onClick={self.changePosition.bind(self, position.toLowerCase())}/>
			);
		});

		return positionList;
	}

	renderTypography() {
		let self = this;
		let typographList = [];
		let typographs = [
			'e-display-4', 'e-display-3', 'e-display-2', 'e-display-1', 'e-headline', 'e-title', 'e-subhead', 'e-body2', 'e-body1', 'e-caption', 'e-button'
		];

		[].forEach.call(typographs, function(typograph) {
			typographList.push(
				<Btn
					label={typograph}
					type={ (typograph === self.state.active.typo) ? 'info' : 'succes'}
					ripple={false}
					className={ClassNames('flat', (typograph === self.state.active.typo) ? 'e-background-indigo-600' : 'e-background-indigo-400')}
					key={'text-typograph-' + typograph.toLowerCase()}
					onClick={self.changeTypography.bind(self, typograph.toLowerCase())}/>
			);
		});

		return typographList;
	}

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
						</Text>
			        	<Card>
			        		<CardContent>
								<Block>
									<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 4. TEXT TYPOGRAPHY</Text>
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Typography is such an important part of a catchy website, so you must use it carefully. You are just a few classes away of doing it! To do that, we are here helping you with predefined classes.
									</Text>

									<Block className={'e-row'}>
										<Block className={'brick brick-5'}>
											<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
											<Divider classes={'thin short e-background-indigo-400'} />
											<Block className={'e-background-grey-100 e-text-center e-padding-top-15 e-padding-bottom-15 e-body1 live-container'}>
												<Block
													classes={''}>
													&lt;Text type=&#123;'{this.state.textType}'&#125; classes=&#123;'{ClassNames(this.state.textPosition, this.state.textTypography)}'&#125;&gt;
													<Text
														target={'_blank'}
														type={this.state.textType}
														href={'http://getessence.io'}
														classes={ClassNames('e-text-grey-600', this.state.textPosition, this.state.textTypography)}
														style={{display:'block'}}>
														Text Example
													</Text>
													&lt;/Text&gt;

												</Block>
											</Block>
										</Block>
										<Block className={'brick brick-7 min-height'}>
											<Text type={'h4'} classes={'e-text-indigo-400'}>CHOOSE TEXT STYLING:</Text>
											<Divider classes={'thin short e-background-indigo-400'} />

											<Tab data={{
												'header': [{
														'context': (<Text>Type</Text>)
													},{
														'context': (<Text>Position</Text>)
													},{
														'context': (<Text>Typography</Text>)
													}
												],
												'rows': [
													(
														<Block>{this.renderType()}</Block>
													),
													(
														<Block>{this.renderPosition()}</Block>
													),
													(
														<Block>{this.renderTypography()}</Block>
													)
												]
											}}
											classes={'e-background-indigo-400 e-text-grey-50'}
											indicator={'e-background-grey-50'}/>
										</Block>
									</Block>
								</Block>
			        		</CardContent>
						</Card>

						<Block className={'e-padding-bottom-25'}>
							<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
							<Divider classes={'thin short e-background-indigo-400'} />

							<pre className={'e-background-grey-100 e-text-black'}>
			    				<code>
									npm install <strong>essence-core</strong>

			    					<br/>
			    					<br/>

									import &#123;Text&#125; from 'essence-core';
									<br />
									<br />
									&lt;Text type=&#123;a&#125; href=&#123;'http://getessence.io'&#125; target=&#123;'_blank'&#125;&gt;
										Discover Essence
									&lt;Text/&gt;
									<br />
			    				</code>
							</pre>
							<Text type={'h4'} classes={'e-text-indigo-400 e-padding-top-15 e-text-uppercase'}>Properties:</Text>
							<Divider classes={'thin short e-background-indigo-400 '} />
							<pre className={'e-text-black properties e-text-left'}>
								<code>
									<table>
										<thead className={'e-background-grey-100 '}>
											<tr>
											<th>Name</th>
											<th>Default</th>
											<th>Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>type</td>
												<td style={{paddingLeft:'10px',paddingRight:'10px'}}>span</td>
												<td>Select one from the list: a, p, label, strong, small, caption, h1, h2, h3, h4, h5, h6, sup, sub, em</td>
											</tr>
											<tr>
												<td>position</td>
												<td style={{paddingLeft:'10px',paddingRight:'10px'}}>e-text-left</td>
												<td>Use classes from the list: e-text-left, e-text-right, e-text-center, e-text-justify, e-text-uppercase, e-text-capitalize, e-text-lowercase</td>
											</tr>
											<tr>
												<td>typography</td>
												<td style={{paddingLeft:'10px',paddingRight:'10px'}}>e-body1</td>
												<td>Use classes from the list: e-display-4,  e-display-3,  e-display-2,  e-display-1,  e-headline,  e-title,  e-subhead,  e-body2,  e-body1,  e-caption</td>
											</tr>
											<tr>
												<td>badge</td>
												<td style={{paddingLeft:'10px',paddingRight:'10px'}}>data-badge</td>
												<td>Option with a maximum lenght of 3 chars </td>
											</tr>
										</tbody>
									</table>
								</code>
							</pre>
						</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreUtilities extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
        	<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
        		<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
						</Text>

			        	<Card>
			        		<CardContent>
								<Block>
									<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 5. UTILITIES</Text>
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Utilities are named 'Utils' and represent helpers for other components to maintain the desired functionality.
									</Text>

									<Divider />
									<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										- <strong>BackgroundColor</strong>: extracts the color property from an element, it is used on the RippleEffect for a Btn component
										<br />
										<br />
										- <strong>ClickPosition</strong>: calculate the position of a click based on the clicked element and the parent coordinates.
										<br />
										<br />
										- <strong>Client</strong> has 3 functions:
											<br />
										&nbsp;&nbsp; <u>isMobile</u> return true or false if the client uses a mobile browser,
											<br />
										&nbsp;&nbsp; <u>screenSize</u>: return the screen width (1 = small, 2 = medium, 3 = large),
											<br />
										&nbsp;&nbsp; <u>documentSize</u>: return the document size (1 = small, 2 = medium, 3 = large)
										<br />
										<br />
										- <strong>Timer</strong>: starts a timer instance. It is used on the SnackBar &amp; Toast component.
									</Text>
									<br />
									<br />

									<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
									<Divider classes={'thin short e-background-indigo-400'} />

									<pre className={'e-background-grey-100 e-text-black'}>
					    				<code>
											import &#123;Utils&#125; from 'essence-core';
											<br />
											<br />
											let boundingClient = this.refs.yourElement.getBoundingClientRect();
											<br />
											<br />
											let position = Utils.ClickPosition(event, boundingClient);
											<br />
											<br />
											let color = Utils.BackgroundColor(event);
											<br />
											<br />
											let isMobile = Utils.Client.isMobile();
											<br />
											<br />
											let screenSize = Utils.Client.screenSize();
											<br />
											<br />
											let documentSize = Utils.Client.documentSize();
											<br />
											<br />
											this.timer = new Utils.Timer(
											<br />
											&nbsp;&nbsp;function() &#123;
											<br />
											&nbsp;&nbsp;&nbsp;// your callback function
											<br />
											&nbsp;&nbsp;&#125;,
											<br />
											&nbsp;&nbsp;2000 // miliseconds
											<br />
											);
											<br />
											<br />
											pauseTimer() &#123;
											<br />
											&nbsp;if (this.timer) &#123;
											<br />
											&nbsp;&nbsp;this.timer.pause();
											<br />
											&nbsp;&#125;
											<br />
											&#125;
											<br />
											<br />
											resumeTimer() &#123;
											<br />
											&nbsp;if (this.timer) &#123;
											<br />
											&nbsp;&nbsp;this.timer.resume();
											<br />
											&nbsp;&#125;
											<br />
											&#125;
											<br />
					    				</code>
									</pre>
								</Block>
							</CardContent>
			        	</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppCoreGridSystem = AppCoreGridSystem;
exports.AppCoreDivider = AppCoreDivider;
exports.AppCoreRippleInk = AppCoreRippleInk;
exports.AppCoreTextTypography = AppCoreTextTypography;
exports.AppCoreUtilities = AppCoreUtilities;
