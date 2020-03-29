import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { IoIosArrowDropdown } from 'react-icons/io';

const S = {
    ContentList: styled.div`
        padding: 15px;
    `,
    Header: styled.div`
        padding: 8px 10px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        background-color: ${props => props.colourScheme.mask};
        box-shadow: 0 0 5px 0 black;
        cursor: pointer;

        > h3 {
            margin: 0;
        }

        > span {
            display: inline-flex;
            transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
            transition: transform 0.5s ease-out;
        }

        &:hover {
            box-shadow: 0px 0px 2px 1px black;
        }
    `,
    Container: styled.div`
        height: ${props => props.visibleHeight}px;
        overflow-y: hidden;
        transition: height 0.5s ease-out;
    `,
    List: styled.ul`
        padding: 0;
        margin: 0;
        list-style: none;
        ${props => props.displayable ? 'display: block' : 'display: none' };
    `,
    Item: styled.li`
        min-height: 40px;
        margin: 10px 5px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        background-color: white;
        border-left: 10px solid ${props => props.colourScheme.mask};
        border-radius: 5px;
    `
}

const ContentList = (props) => {
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(false);
    const [height, setHeight] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        setHeight(open ? listRef.current.scrollHeight : 0);
    }, [open, listRef]);

    const clickHandler = () => { 
        setOpen(!open);
        setTransition(true); 
    }
    const transitionEndHandler = () => { setTransition(!transition); }

    return (
        <S.ContentList>
            <S.Header onClick={clickHandler} colourScheme={props.colourScheme} open={open}>
                <h3>{props.heading}</h3>
                <span><IoIosArrowDropdown size={'20px'}/></span>
            </S.Header>
            <S.Container visibleHeight={height} onTransitionEnd={transitionEndHandler}>
                <S.List ref={listRef} displayable={open || transition}>
                    {props.items.map((item, idx) => (
                        <S.Item key={idx} colourScheme={props.colourScheme}>{item}</S.Item>
                    ))}
                </S.List>
            </S.Container>
        </S.ContentList>
    )
}

export default ContentList;