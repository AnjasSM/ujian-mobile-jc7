import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Title, Body } from 'native-base';

class Timeline extends Component {
    componentDidMount() {
        this.props.getAllPost();
        
    }

    renderPost = () => {
            const listJSX = this.props.postlist.map((item) => {
                return (
                    <PostDetail key={item.uid} post={item} />
                );
            });
            return listJSX;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Instagram</Title>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView>
                        {this.renderPost()}
                    </ScrollView> 
                </View>
            </Container>
        )
    }
}
export default Timeline;