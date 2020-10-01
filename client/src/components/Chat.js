import React, { useEffect, useRef } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../actions/postActions'