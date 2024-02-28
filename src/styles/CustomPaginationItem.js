import styled from "styled-components";
import { Pagination } from "react-bootstrap";

export const CustomPaginationItem = styled(Pagination.Item)`
    
    span {
        background-color: rgb(33,37,41) !important;
        border-color: rgb(33,37,41) !important;
    }

    .page-link {
        color: rgb(33,37,41) !important;
    }

    &.active > .page-link {
        color: white !important;
    }
    
`