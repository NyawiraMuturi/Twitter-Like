import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Icon,
  } from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'

const BreadCrumb = ({title, icon}) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} p={2}>
            <BreadcrumbItem>
                {icon && <Icon as={icon} fontSize={'lg'}/>}
                <BreadcrumbLink href='#' as={'b'}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default BreadCrumb