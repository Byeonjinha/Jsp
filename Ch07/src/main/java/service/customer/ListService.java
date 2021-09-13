package service.customer;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.CustomerDao;
import dao.MemberDao;
import model.CommonService;
import vo.CustomerVo;
import vo.MemberVo;

public class ListService implements CommonService {

	@Override
	public String requestProc(HttpServletRequest req, HttpServletResponse resp) {
		
		List<CustomerVo> customers = CustomerDao.getInstance().selectCustomers();
		
		req.setAttribute("customers", customers);
		
		return "/customer/list.jsp";
	}
}












