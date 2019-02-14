import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Left, Title, Body } from 'native-base'
import { photoUpdate, photoCreate } from '../actions'
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { Icon } from 'react-native-elements';
import { Header, Left, Right, Body} from 'native-base';


class PostPictForm extends Component {

    onPhotoChange = (text) => {
        this.props.photoUpdate('photo', text);
    }

    onCaptionChange = (text) => {
        this.props.photoUpdate('caption', text);
    }

    onButtonPress = () => {
        const { photo, caption } = this.props;

        this.props.photoCreate(photo, caption);
    }


    render() {
        return (
            <Container>
                <Header>
                    <Right></Right>
                    <Body>Instagram</Body>
                    <Left>
                        <Icon name='acount-profile' color='red' size={35} onPress={() => this.props.navigation.navigate('Profile')} />
                    </Left>
                </Header>
                <View>
                    <CardSection>
                        <Input
                            label="caption"
                            placeholder=" The Caption"
                            value={this.props.caption}
                            onChangeText={this.onCaptionChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="photo"
                            placeholder="Image Url"
                            value={this.props.photo}
                            onChangeText={this.onPhotoChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Post
                        </Button>
                    </CardSection>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { photo, caption } = state.photoForm;

    return { photo, caption };
};

export default connect(mapStateToProps, { photoUpdate, photoCreate })(PostPictForm);