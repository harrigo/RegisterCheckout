<?php

namespace Harrigo\RegisterCheckout\Plugin;

use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\Registry;
use Magento\Framework\UrlInterface;

class Redirect
{
    protected $coreRegistry;

    protected $url;

    protected $resultFactory;


    public function __construct(Registry $registry, UrlInterface $url, ResultFactory $resultFactory)
    {
        $this->coreRegistry = $registry;
        $this->url = $url;
        $this->resultFactory = $resultFactory;
    }

    public function aroundGetRedirect ($subject, \Closure $proceed)
    {
        //need to check out if registration was from checkouit
        /** @var \Magento\Framework\Controller\Result\Redirect $result */

		if (isset($_POST['checkout']) && $_POST['checkout'] == 'true') {
			$result = $this->resultFactory->create(ResultFactory::TYPE_REDIRECT);
			$result->setUrl($this->url->getUrl('checkout'));
			return $result;
		}
		
		
        

        return $proceed();
    }
}
