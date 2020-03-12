import { extend } from 'rebass-extend'
import {
  display,
  height,
  maxWidth,
  textAlign,
  fontStyle,
  borders,
} from 'styled-system'
import styled from 'styled-components'

const {
  Box,
  Flex,
  Text,
  Heading,
  Button: RealButton,
  Link: RealLink,
  Image,
  Card,
} = extend({
  Box: [display, textAlign, maxWidth, height, borders],
  Text: [fontStyle],
})

const Button = styled(RealButton)`
  padding: 0 8px;
  border-radius: 3px;
  line-height: 26px;
  font-weight: normal;
  font-size: 13px;
  height: 28px;
  background: white;
  color: blue;
  border: 1px blue solid;
  text-transform: uppercase;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`

const Link = styled(RealLink)`
  cursor: pointer;
`

export { Box, Flex, Text, Heading, Button, Link, Image, Card }
