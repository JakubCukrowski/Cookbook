import styled from "styled-components";
import { Pagination } from "react-bootstrap";

export const CustomPaginationItem = styled(Pagination.Item)`
    
    span {
        background-color: #e19f25 !important;
        border-color: #e19f25 !important;
    }

    .page-link {
        color: black !important;
    }

    &.active > .page-link {
        color: white !important;
    }
    
`